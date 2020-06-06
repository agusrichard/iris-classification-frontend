import { 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAILED,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILED,
  } from '../actions/types'
  
  const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isSuccess: false,
    loginToken: '',
    errorMessage: ''
  }


  export default function authReducer(state=initialState, action) {
    switch (action.type) {
      case USER_LOGIN_REQUEST: return {
        ...state,
        isLoading: true,
        isSuccess: false
      }
  
      case USER_LOGIN_SUCCESS: return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isSuccess: true,
        loginToken: action.payload
      }
  
      case USER_LOGIN_FAILED: return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isSuccess: false,
        loginToken: '',
        errorMessage: 'Failed to login'
      }
  
      case USER_REGISTER_REQUEST: return {
        ...state,
        isLoading: true,
        isSuccess: false
      }
  
      case USER_REGISTER_SUCCESS: return {
        ...state,
        isLoading: false,
        isSuccess: true
      }
  
      case USER_REGISTER_FAILED: return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errorMessage: 'Failed to register'
      }
  
      default: return state
    }
  }