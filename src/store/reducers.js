import { combineReducers } from 'redux';
import HomeReducer from './home/homeReducer';
import IrrigationReducer from './irrigation/irrigationReducer';
import ScheduleReducer from './schedule/scheduleReducer';

export default combineReducers({
  // home: HomeReducer,
  irrigation: IrrigationReducer,
  schedule: ScheduleReducer,
});
