import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../../api';
import {
  GET_SCHEDULE_REQUEST,
  GET_SCHEDULE_LOADING,
  GET_SCHEDULE_SUCCESS,
  GET_SCHEDULE_ERROR,
  ADD_SCHEDULE_REQUEST,
  ADD_SCHEDULE_LOADING,
  ADD_SCHEDULE_SUCCESS,
  ADD_SCHEDULE_ERROR,
  UPDATE_SCHEDULE_REQUEST,
  UPDATE_SCHEDULE_LOADING,
  UPDATE_SCHEDULE_SUCCESS,
  UPDATE_SCHEDULE_ERROR,
  DELETE_SCHEDULE_REQUEST,
  DELETE_SCHEDULE_LOADING,
  DELETE_SCHEDULE_SUCCESS,
  DELETE_SCHEDULE_ERROR,
} from './scheduleActions';

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchGetSchedule() {
  try {
    yield put({ type: GET_SCHEDULE_LOADING });
    const response = yield call({ context: api, fn: api.getSchedule });
    yield put({ type: GET_SCHEDULE_SUCCESS, payload: { schedule: response.schedule } });
  }
  catch (error) {
    yield put({ type: GET_SCHEDULE_ERROR, payload: { errorMessage: error.message } });
  }
}

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchAddSchedule({ payload }) {
  try {
    yield put({ type: ADD_SCHEDULE_LOADING });
    const response = yield call({ context: api, fn: api.addSchedule }, payload);
    yield put({ type: ADD_SCHEDULE_SUCCESS, payload: { schedule: response.schedule } });
  }
  catch (error) {
    yield put({ type: ADD_SCHEDULE_ERROR, payload: { errorMessage: error.message } });
  }
}

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchUpdateSchedule(uid, payload) {
  try {
    yield put({ type: UPDATE_SCHEDULE_LOADING });
    const response = yield call({ context: api, fn: api.updateSchedule }, uid, payload);
    yield put({ type: UPDATE_SCHEDULE_SUCCESS, payload: { schedule: response.schedule } });
  }
  catch (error) {
    yield put({ type: UPDATE_SCHEDULE_ERROR, payload: { errorMessage: error.message } });
  }
}

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchDeleteSchedule(uid) {
  try {
    yield put({ type: DELETE_SCHEDULE_LOADING });
    const response = yield call({ context: api, fn: api.deleteSchedule }, uid);
    yield put({ type: DELETE_SCHEDULE_SUCCESS, payload: { schedule: response.schedule } });
  }
  catch (error) {
    yield put({ type: DELETE_SCHEDULE_ERROR, payload: { errorMessage: error.message } });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(GET_SCHEDULE_REQUEST, fetchGetSchedule);
  yield takeLatest(ADD_SCHEDULE_REQUEST, fetchAddSchedule);
  yield takeLatest(UPDATE_SCHEDULE_REQUEST, fetchUpdateSchedule);
  yield takeLatest(DELETE_SCHEDULE_REQUEST, fetchDeleteSchedule);
}
