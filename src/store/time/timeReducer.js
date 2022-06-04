import {
  GET_TIME_LOADING,
  GET_TIME_SUCCESS,
  GET_TIME_ERROR,
  CHANGE_TIME_LOADING,
  CHANGE_TIME_SUCCESS,
  CHANGE_TIME_ERROR,
} from './timeActions';
import { Status } from '../../api';

const initialState = {
  apiStatus: Status.DEFAULT,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TIME_LOADING:
    case CHANGE_TIME_LOADING:
      return {
        ...state,
        apiStatus: Status.LOADING,
      };
    case GET_TIME_SUCCESS:
    case CHANGE_TIME_SUCCESS:
      return {
        ...state,
        apiStatus: Status.SUCCESS,
        status: payload.status,
      };
    case GET_TIME_ERROR:
    case CHANGE_TIME_ERROR:
      return {
        ...state,
        apiStatus: Status.ERROR,
        errorMessage: payload.errorMessage,
      }
    default:
      return state;
  }
};
