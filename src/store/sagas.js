import { fork } from 'redux-saga/effects';
import irrigationSagas from './irrigation/irrigationSagas';
import scheduleSagas from './schedule/scheduleSagas';
import timeSagas from './time/timeSagas';
// import someOtherSagas from './someOther/sagas';

/**
 * rootSaga
 */
export default function* rootSaga() {
  yield fork(irrigationSagas),
  yield fork(scheduleSagas),
  yield fork(timeSagas)
  // yield fork(someOtherSagas)
}
