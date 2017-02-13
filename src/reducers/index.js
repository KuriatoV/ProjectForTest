import { combineReducers } from 'redux';
import events from './eventsReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  events,
});

export default rootReducer;
