export const GET_STATUS_REQUEST = 'GET_STATUS_REQUEST';
export const GET_STATUS_LOADING = 'GET_STATUS_LOADING';
export const GET_STATUS_SUCCESS = 'GET_STATUS_SUCCESS';
export const GET_STATUS_ERROR = 'GET_STATUS_ERROR';

export const CHANGE_STATUS_REQUEST = 'CHANGE_STATUS_REQUEST';
export const CHANGE_STATUS_LOADING = 'CHANGE_STATUS_LOADING';
export const CHANGE_STATUS_SUCCESS = 'CHANGE_STATUS_SUCCESS';
export const CHANGE_STATUS_ERROR = 'CHANGE_STATUS_ERROR';

export const getStatus = () => ({
  type: GET_STATUS_REQUEST
});

export const changeStatus = (duration) => ({
  type: CHANGE_STATUS_REQUEST,
  duration: duration
});
