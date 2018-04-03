import { USER_LOGIN_PENDING,
         USER_LOGIN_SUCCESS,
         USER_LOGIN_FAILED,
         USER_SIGNUP_SUCCESS,
         USER_SIGNUP_FAILED,
         USER_LOGOUT
} from '../utils/constants'

const BASE_URL = 'http://localhost:8082'

export const userLogin = (email, password, loggedOn) => {
//  console.log('in userLogin with ',email,password,loggedOn)
  return async (dispatch) => {
    try {
      const json = JSON.stringify({email, password})
//      console.log('stringified:',json)
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
//      console.log('userObject',userObject)
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
      try {
//            console.log('userLogin action calling loggedOn with',userObject)
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
//  console.log('in userSignup with',newUser)
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
//      console.log('isSignedUp',isSignedUp)
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
//  console.log('in userLogout')
  return async(dispatch) => {
      dispatch({type: USER_LOGOUT})
//      console.log('end userLogout')
  }
}