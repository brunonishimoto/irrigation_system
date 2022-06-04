import { combineReducers } from 'redux';
import IrrigationReducer from './irrigation/irrigationReducer';
import ScheduleReducer from './schedule/scheduleReducer';
import TimeReducer from './time/timeReducer'

export default combineReducers({
  irrigation: IrrigationReducer,
  schedule: ScheduleReducer,
  time: TimeReducer
});
