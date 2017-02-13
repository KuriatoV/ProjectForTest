import * as types from '../constants/ActionTypes';
import axios from 'axios';
export function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}
export function loadEventsFailure(data) {
  return { type: types.LOAD_EVENTS_FAILURE, data };
}
export function loadEvents() {
  const URL= `http://api.itboost.org:82/app_dev.php/api/events`;
  return function(dispatch) {
    return axios
        .get(URL)
        .then(res => {
          dispatch(loadEventsSuccess(res.data));
        }).catch(error => {
            console.log(error);
        });
  };
}
