import * as types from '../constants/ActionTypes';

const initialState = {

}

export default function userInfoReducer(state = initialState, action) {
  switch (action.type) {

      case types.LOGIN_USER_INFO_SUCCESS:
      return {
        ...state,
        user:action.data
       }


    default: {
      return state;
    }
  }
}
