export const GET_SCHEDULE_REQUEST = 'GET_SCHEDULE_REQUEST';
export const GET_SCHEDULE_LOADING = 'GET_SCHEDULE_LOADING';
export const GET_SCHEDULE_SUCCESS = 'GET_SCHEDULE_SUCCESS';
export const GET_SCHEDULE_ERROR = 'GET_SCHEDULE_ERROR';

export const ADD_SCHEDULE_REQUEST = 'ADD_SCHEDULE_REQUEST';
export const ADD_SCHEDULE_LOADING = 'ADD_SCHEDULE_LOADING';
export const ADD_SCHEDULE_SUCCESS = 'ADD_SCHEDULE_SUCCESS';
export const ADD_SCHEDULE_ERROR = 'ADD_SCHEDULE_ERROR';

export const UPDATE_SCHEDULE_REQUEST = 'UPDATE_SCHEDULE_REQUEST';
export const UPDATE_SCHEDULE_LOADING = 'UPDATE_SCHEDULE_LOADING';
export const UPDATE_SCHEDULE_SUCCESS = 'UPDATE_SCHEDULE_SUCCESS';
export const UPDATE_SCHEDULE_ERROR = 'UPDATE_SCHEDULE_ERROR';

export const DELETE_SCHEDULE_REQUEST = 'DELETE_SCHEDULE_REQUEST';
export const DELETE_SCHEDULE_LOADING = 'DELETE_SCHEDULE_LOADING';
export const DELETE_SCHEDULE_SUCCESS = 'DELETE_SCHEDULE_SUCCESS';
export const DELETE_SCHEDULE_ERROR = 'DELETE_SCHEDULE_ERROR';


export const getSchedule = () => ({
  type: GET_SCHEDULE_REQUEST
});

export const addSchedule = (hour, minute, duration) => ({
  type: ADD_SCHEDULE_REQUEST,
  payload: {"hour": hour, "minute": minute, "duration": duration }
});

export const updateSchedule = (uid, payload) => ({
  type: UPDATE_SCHEDULE_REQUEST,
  uid: uid,
  payload: {"hour": payload["hour"], "minute": payload["minute"], "active": payload["active"], "duration": payload["duration"]}
});

export const deleteSchedule = (uid) => ({
  type: DELETE_SCHEDULE_REQUEST,
  uid: uid,
});
