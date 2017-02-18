import * as types from '../constants/ActionTypes';
import axios from 'axios';
import {SubmissionError} from 'redux-form';

export function loginRequest(data) {
  return {type: types.LOGIN_REQUEST, data};
}
export function loginSuccess(data) {
  return {type: types.LOGIN_SUCCESS, data};
}
export function loginFailure(error) {
  return {type: types.LOGIN_FAILURE, error};
}
export function reset(data) {
  return {type: types.RESET, data};
}
export function resetToInitialstate(data) {
  return {type: types.RESET_TO_INITIALSTATE, data};
}

export function login(values) {
  const URL = `http://api.itboost.org:82/app_dev.php/api/login_check`;
  let loginInfo = {
    _username: values.username,
    _password: values.password
  }
  return (dispatch) => {
    dispatch(loginRequest());
    axios.post(URL, loginInfo).then((res) => {
      dispatch(loginSuccess(res));
    }).catch(error => {
      dispatch(loginFailure(error));

    });
  }
}
