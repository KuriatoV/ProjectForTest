import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function loadUserInfoSuccess(data) {
  return {type: types.LOGIN_USER_INFO_SUCCESS, data};
}
export function updateUserInfoSuccess(data) {
  return {type: types.UPDATE_USER_INFO_SUCCESS, data};
}

export function loadUserInfo() {
  const URL = `http://api.itboost.org:82/app_dev.php/api/users/37`;
  return (dispatch) => {
    axios.get(URL)
    .then((res) => {
      dispatch(loadUserInfoSuccess(res.data));
    }).catch(error => {
      console.log(error)
    });
  }
}

export function updateUserInfo(userInfo) {
  const URL = `http://api.itboost.org:82/app_dev.php/api/users/id`;
  return (dispatch) => {
    axios.put(URL, userInfo).then((res) => {
      dispatch(updateUserInfoSuccess(res));
    }).catch(error => {
    console.log(error)

    });
  }
}
