import { USER_LOGIN_PENDING,
         USER_LOGIN_SUCCESS,
         USER_LOGIN_FAILED,
         USER_SIGNUP_PENDING,
         USER_SIGNUP_SUCCESS,
         USER_SIGNUP_FAILED,
         USER_LOGOUT_FAILED,
         USER_LOGGED_IN,
         USER_SIGNED_UP,
         USER_LOGOUT,
         TOGGLE
} from '../utils/constants'

let initialState = {
  isLoading: false,
  isOpen: false,
  user: {},
  showLoginError: false,
  showSignupError: false,
  logout: false
};

export default(state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_PENDING:
      return {...state, isLoading: true}
    case USER_LOGIN_SUCCESS:
//      console.log('setting state for user',action.payload.data)
      return {...state, isLoading: false, user: action.payload.data, isOpen: true}
    case USER_LOGOUT_FAILED:
    case USER_LOGIN_FAILED:
      return {...state, isLoading: false, showLoginError: true}
    case USER_SIGNUP_PENDING:
      return {...state, isLoading: true}
    case USER_SIGNUP_SUCCESS:
      return {...state, isLoading: false}
    case USER_SIGNUP_FAILED:
      return {...state, isLoading: false, showSignupError: true}
    case USER_SIGNED_UP:
    case USER_LOGGED_IN:
      return {...state, user: action.user, isOpen: true}
    case TOGGLE:
      return {...state, isOpen: action.isOpen}
    case USER_LOGOUT:
//      console.log('b4 changing state',state)
//      console.log('setting to isOpen: false, isLoading: false, logout: true')
      return {...state, isOpen: false, isLoading: false, logout: true}
    default:
      return state;
  }
}
