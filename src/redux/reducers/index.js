import { combineReducers } from 'redux'
import { USER_LOGOUT_SUCCESS } from '../actions/types'


const reducers = {
  auth: authReducer
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