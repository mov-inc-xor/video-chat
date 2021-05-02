import {SET_LOCAL_STREAM} from "../actionTypes"
import {Action} from "../actions";

const initialState = {
  localStream: null,
};

type State = {
  localStream: MediaStream | null,
}

function stream(state: State = initialState, action: Action) {
  switch (action.type) {
    case SET_LOCAL_STREAM: {
      return {
        ...state,
        localStream: action.payload,
      };
    }
    default:
      return state;
  }
}

export default stream;
