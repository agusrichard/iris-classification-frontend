import { combineReducers } from 'redux'
import { USER_LOGOUT_SUCCESS } from '../actions/types'
import authReducer from './auth'
import irisReducer from './iris'


const reducers = {
  auth: authReducer,
  iris: irisReducer
}

const appReducer = combineReducers(reducers)

const rootReducer = (state, action) => {
  console.log('rootReducer')
  console.log(action.type)
  if (action.type === USER_LOGOUT_SUCCESS) {
    state = {}
  }

  return appReducer(state, action)
}

export default rootReducer