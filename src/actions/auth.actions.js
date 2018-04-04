import { USER_LOGIN_PENDING,
         USER_LOGIN_SUCCESS,
         USER_LOGIN_FAILED,
         USER_SIGNUP_SUCCESS,
         USER_SIGNUP_FAILED,
         USER_LOGOUT
} from '../utils/constants'

const BASE_URL = 'http://localhost:8082'

export const userLogin = (email, password, loggedOn) => {
  return async (dispatch) => {
    try {
      const json = JSON.stringify({email, password})
      dispatch({type: USER_LOGIN_PENDING})
      let response = await fetch(`${BASE_URL}/api/login`, {
          method: "POST",
          body: json,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
      let userObject = await response.json()
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
      try {
            loggedOn(userObject)
      } catch (err1) {
            console.log('problem calling loggedOn',err1)
      }
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
};

export const userSignup = (newUser, loggedOn) => {
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      const json = JSON.stringify(newUser)
      console.log('posting with body',json)
      let response = await fetch(`${BASE_URL}/api/users`, {
          method: "POST",
          body: json,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
      })
      let isSignedUp = await response.json()
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: isSignedUp
      })
      try {
//            console.log('userSignup action dispatching with',newUser)
            dispatch(userLogin(newUser.email,newUser.password,loggedOn))
//            loggedOn(newUser)
      } catch (err1) {
            console.log('problem calling loggedOn',err1)
      }
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
};

export const userLogout = () => {
  return async(dispatch) => {
      dispatch({type: USER_LOGOUT})
  }
}