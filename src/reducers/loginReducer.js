import * as types from '../constants/ActionTypes';

const initialState = {
loginSuccess:false,
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

      case types.LOGIN_SUCCESS:
      return { ...state, loginSuccess:true}

      case types.LOGIN_FAILURE:
      return { ...state, loginSuccess:false}

    default: {
      return state;
    }
  }
}
