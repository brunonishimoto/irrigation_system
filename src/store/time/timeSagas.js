import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../../api';
import {
  GET_TIME_REQUEST,
  GET_TIME_LOADING,
  GET_TIME_SUCCESS,
  GET_TIME_ERROR,
  CHANGE_TIME_REQUEST,
  CHANGE_TIME_LOADING,
  CHANGE_TIME_SUCCESS,
  CHANGE_TIME_ERROR,
} from './timeActions';

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchGetTime() {
  try {
    yield put({ type: GET_TIME_LOADING });
    const response = yield call({ context: api, fn: api.getTime });
    yield put({ type: GET_TIME_SUCCESS, payload: { time: response.time } });
  }
  catch (error) {
    yield put({ type: GET_TIME_ERROR, payload: { errorMessage: error.message } });
  }
}

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchChangeTime() {
  try {
    yield put({ type: CHANGE_TIME_LOADING });
    const response = yield call({ context: api, fn: api.changeTime });
    yield put({ type: CHANGE_TIME_SUCCESS, payload: { time: response.time } });
  }
  catch (error) {
    yield put({ type: CHANGE_TIME_ERROR, payload: { errorMessage: error.message } });
  }
}


// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(GET_TIME_REQUEST, fetchGetTime);
  yield takeLatest(CHANGE_TIME_REQUEST, fetchChangeTime);
}
