import * as types from '../constants/ActionTypes';

const initialState = {

}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

      // case types.LOAD_EVENTS_SUCCESS:
      // return {...state}

    default: {
      return state;
    }
  }
}
