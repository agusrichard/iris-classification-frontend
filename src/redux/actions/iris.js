import axios from 'axios'
import {
  PREDICT_REQUEST,
  PREDICT_SUCCESS,
  PREDICT_FAILED
} from './types'

export const predict = (token, data) => {
  return async dispatch => {
    dispatch({ type: PREDICT_REQUEST })
    try {
      const config = { headers: { 'x-access-token': token } }
      const response = await axios.post(process.env.REACT_APP_BASE_URL + '/iris/predict', data, config)
      console.log(response)
      if (response.status === 200) {
        dispatch({ type: PREDICT_SUCCESS, payload: response.data.data })
      } else {
        dispatch({ type: PREDICT_FAILED, payload: response.data.message })
      }
    } catch(err) {
      dispatch({ type: PREDICT_FAILED, payload: err.message })
    }
  }
}