import {
  GET_SCHEDULE_LOADING,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_ERROR,
  ADD_SCHEDULE_LOADING,
  ADD_SCHEDULE_SUCCESS,
  ADD_SCHEDULE_ERROR,
  UPDATE_SCHEDULE_LOADING,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_ERROR,
  DELETE_SCHEDULE_LOADING,
  DELETE_SCHEDULE_SUCCESS,
  DELETE_SCHEDULE_ERROR,
} from './scheduleActions';
import { Status } from '../../api';

const initialState = {
  apiStatus: Status.DEFAULT,
  errorMessage: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SCHEDULE_LOADING:
    case ADD_SCHEDULE_LOADING:
    case UPDATE_SCHEDULE_LOADING:
    case DELETE_SCHEDULE_LOADING:
      return {
        ...state,
        apiStatus: Status.LOADING,
      };
    case GET_SCHEDULE_SUCCESS:
    case ADD_SCHEDULE_SUCCESS:
    case UPDATE_SCHEDULE_SUCCESS:
    case DELETE_SCHEDULE_SUCCESS:
      return {
        ...state,
        apiStatus: Status.SUCCESS,
        schedule: payload.schedule,
      };
    case GET_SCHEDULE_ERROR:
    case ADD_SCHEDULE_ERROR:
    case UPDATE_SCHEDULE_ERROR:
    case DELETE_SCHEDULE_ERROR:
      return {
        ...state,
        apiStatus: Status.ERROR,
        errorMessage: payload.errorMessage,
      }
    default:
      return state;
  }
};
