import {
  GET_STATUS_LOADING,
  GET_STATUS_SUCCESS,
  GET_STATUS_ERROR,
  CHANGE_STATUS_LOADING,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_ERROR,
} from './irrigationActions';
import { Status } from '../../api';

const initialState = {
  apiStatus: Status.DEFAULT,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STATUS_LOADING:
    case CHANGE_STATUS_LOADING:
      return {
        ...state,
        apiStatus: Status.LOADING,
      };
    case GET_STATUS_SUCCESS:
    case CHANGE_STATUS_SUCCESS:
      return {
        ...state,
        apiStatus: Status.SUCCESS,
        status: payload.status,
      };
    case GET_STATUS_ERROR:
    case CHANGE_STATUS_ERROR:
      return {
        ...state,
        apiStatus: Status.ERROR,
        errorMessage: payload.errorMessage,
      }
    default:
      return state;
  }
};
