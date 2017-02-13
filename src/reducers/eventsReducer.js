import * as types from '../constants/ActionTypes';

const initialState = {
events:{
  items:[],
},

}

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {

      case types.LOAD_EVENTS_SUCCESS:
      return {...state,events:action.events}

    default: {
      return state;
    }
  }
}
