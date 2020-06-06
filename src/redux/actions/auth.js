import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGOUT_SUCCESS
} from './types'


export const register = (username, email, password) => {
  return async dispatch => {
    dispatch({ type: USER_REGISTER_REQUEST })
    try {
      const registerData = { username, email, password }
      const response = await axios.post(process.env.REACT_APP_BASE_URL + '/auth/register', registerData)
      console.log(response)
      dispatch({ type: USER_REGISTER_SUCCESS })
    } catch(err) {
      console.log('Error in register', err)
      dispatch({ type: USER_REGISTER_FAILED })
    }
  }
}


export const login = (email, password) => {
  return async dispatch => {
    dispatch({ type: USER_LOGIN_REQUEST })
    try {
      const loginData = { email, password }
      const response = await axios.post(process.env.REACT_APP_BASE_URL + '/auth/login', loginData)
      console.log('response in login', response)
      if (response.status === 200) {
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data.token })
      } else {
        dispatch({ type: USER_LOGIN_FAILED })
      }
    } catch(err) {
      console.log('Error in login', err)
      dispatch({ type: USER_LOGIN_FAILED })
    }
  }
}


export const logout = () => {
  return async dispatch => {
    dispatch({ type: USER_LOGOUT_SUCCESS })
  }
}