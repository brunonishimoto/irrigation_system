import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { api } from '../../api';
import {
  GET_STATUS_REQUEST,
  GET_STATUS_LOADING,
  GET_STATUS_SUCCESS,
  GET_STATUS_ERROR,
  CHANGE_STATUS_REQUEST,
  CHANGE_STATUS_LOADING,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_ERROR,
} from './irrigationActions';

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchGetStatus() {
  try {
    yield put({ type: GET_STATUS_LOADING });
    const response = yield call({ context: api, fn: api.getStatus });
    yield put({ type: GET_STATUS_SUCCESS, payload: { status: response.status } });
  }
  catch (error) {
    yield put({ type: GET_STATUS_ERROR, payload: { errorMessage: error.message } });
  }
}

// worker saga: Fetch Trending repositories when watcher saga sees the action
function* fetchChangeStatus(duration) {
  try {
    yield put({ type: CHANGE_STATUS_LOADING });
    const response = yield call({ context: api, fn: api.changeStatus }, duration);
    yield put({ type: CHANGE_STATUS_SUCCESS, payload: { status: response.status } });
  }
  catch (error) {
    yield put({ type: CHANGE_STATUS_ERROR, payload: { errorMessage: error.message } });
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest(GET_STATUS_REQUEST, fetchGetStatus);
  yield takeLatest(CHANGE_STATUS_REQUEST, fetchChangeStatus);
}
