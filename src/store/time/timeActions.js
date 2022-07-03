export const GET_TIME_REQUEST = 'GET_TIME_REQUEST';
export const GET_TIME_LOADING = 'GET_TIME_LOADING';
export const GET_TIME_SUCCESS = 'GET_TIME_SUCCESS';
export const GET_TIME_ERROR = 'GET_TIME_ERROR';

export const CHANGE_TIME_REQUEST = 'CHANGE_TIME_REQUEST';
export const CHANGE_TIME_LOADING = 'CHANGE_TIME_LOADING';
export const CHANGE_TIME_SUCCESS = 'CHANGE_TIME_SUCCESS';
export const CHANGE_TIME_ERROR = 'CHANGE_TIME_ERROR';

export const getTime = () => ({
  type: GET_TIME_REQUEST
});

export const changeTime = (time) => ({
  type: CHANGE_TIME_REQUEST,
  payload: time
});
