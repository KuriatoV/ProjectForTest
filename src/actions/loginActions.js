import * as types from '../constants/ActionTypes';
import axios from 'axios';
// export function loadEventsSuccess(events) {
//   return { type: types.LOAD_EVENTS_SUCCESS, events };
// }
// export function loadEventsFailure(data) {
//   return { type: types.LOAD_EVENTS_FAILURE, data };
// }
export function login(loginData) {
  const URL= `http://api.itboost.org:82/app_dev.php/api/login_check`;
  return function(dispatch) {
    return axios
        .post(URL,{...loginData})
        .then(res => {
          dispatch(loginSuccess(res.data));
        }).catch(error => {
            console.log(error);
        });
  };
}
