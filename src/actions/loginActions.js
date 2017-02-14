import * as types from '../constants/ActionTypes';
import axios from 'axios';
import { SubmissionError } from 'redux-form';

export function loginSuccess(data) {
  return { type: types.LOGIN_SUCCESS, data };
}
export function loginFailure(error) {
  return { type: types.LOGIN_FAILURE, error };
}

export function login(values){
  const URL = `http://api.itboost.org:82/app_dev.php/api/login_check`;
  let loginInfo = {
    _username: values.username,
    _password: values.password
  }
  return (dispatch)=>{
    axios
  .post(URL, loginInfo)
  .then((res) => {
    dispatch(loginSuccess(res.data));
  }).catch(error => {
      throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
    dispatch(loginFailure(error));
  });
}
}
