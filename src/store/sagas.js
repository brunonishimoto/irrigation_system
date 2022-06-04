import { fork } from 'redux-saga/effects';
import homeSagas from './home/homeSagas';
import irrigationSagas from './irrigation/irrigationSagas';
import scheduleSagas from './schedule/scheduleSagas';
// import someOtherSagas from './someOther/sagas';

/**
 * rootSaga
 */
export default function* rootSaga() {
  // yield fork(homeSagas)
  yield fork(irrigationSagas),
  yield fork(scheduleSagas)
  // yield fork(someOtherSagas)
}
