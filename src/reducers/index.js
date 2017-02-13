import { combineReducers } from 'redux';
import schedule from './scheduleReducer';
import events from './eventsReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form:formReducer,
  schedule,
  events,
});

export default rootReducer;
