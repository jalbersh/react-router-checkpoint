export const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_SIGNUP_PENDING = 'USER_SIGNUP_PENDING'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

const BASE_URL = 'http://localhost:8082'

export const userLogin = ({email, password}) => {
  console.log('in userLogin')
  const { history } = this.props
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      let response = await fetch(`${BASE_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify({email, password})
      })
      let userObject = await response.json()
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userObject
      })
      history.push('/profile')
    } catch(err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
    }
  }
};

export const userSignup = (newUser) => {
  console.log('in userSignup with',newUser)
  const { history } = this.props
  return async (dispatch) => {
    try {
      dispatch({type: USER_LOGIN_PENDING})
      console.log('posting with body',JSON.stringify(newUser))
      let response = await fetch(`${BASE_URL}/api/users`, {
        method: "POST",
        body: JSON.stringify(newUser)
      })
      let isSignedUp = await response.json()
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: isSignedUp
      })
      history.push('/profile')
    } catch(err) {
      dispatch({
        type: USER_SIGNUP_FAILED,
        payload: err
      })
    }
  }
};

export const userLogout = () => {
  console.log('in userLogout')
  return async (dispatch) => {
    dispatch({type: USER_LOGOUT})
  }
}