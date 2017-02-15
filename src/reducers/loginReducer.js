import * as types from '../constants/ActionTypes';

const initialState = {
loginSuccess:false,
loginFailure:false,
loginRequest:false,
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

      case types.LOGIN_REQUEST:
      return {
        ...state,
         loginRequest:true,
         loginFailure:initialState.loginFailure,
         loginSuccess:initialState.loginSuccess,
       }
      case types.LOGIN_SUCCESS:
      return {
        ...state,
         loginSuccess:true,
         loginRequest:initialState.loginRequest,
       }

      case types.LOGIN_FAILURE:
      return {
        ...state,
        loginFailure:true,
        loginSuccess:initialState.loginSuccess,
        loginRequest:initialState.loginRequest
      }

      case types.RESET:
      return {
        ...state,
        loginFailure:initialState.loginFailure,
        loginSuccess:initialState.loginSuccess,
        loginRequest:initialState.loginRequest,
      }
      case types.RESET_TO_INITIALSTATE:
      return initialState;

    default: {
      return state;
    }
  }
}
