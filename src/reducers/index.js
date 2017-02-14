import { combineReducers } from 'redux';
import events from './eventsReducer';
import login from './loginReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  events,
  login,
});

export default rootReducer;
