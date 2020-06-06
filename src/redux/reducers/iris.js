import {
  PREDICT_REQUEST,
  PREDICT_SUCCESS,
  PREDICT_FAILED
} from '../actions/types'


const initialState = {
  isLoading: false,
  isSuccess: false,
  data: '',
  errorMessage: ''
}

export default function irisReducer(state=initialState, action) {
  switch (action.type) {
    case PREDICT_REQUEST: return {
      ...state,
      isLoading: true,
      isSuccess: false
    }

    case PREDICT_SUCCESS: return {
      ...state,
      isLoading: false,
      isSuccess: true,
      data: action.payload
    }
    
    case PREDICT_FAILED: return {
      ...state,
      isLoading: false,
      isSuccess: false,
      errorMessage: action.payload
    }

    default: return state
  }
}