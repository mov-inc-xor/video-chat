import {TOGGLE_AUDIO, TOGGLE_VIDEO} from "../actionTypes";
import {Action} from "../actions";

const initialState = {
  audio: false,
  video: false,
};

type State = {
  audio: boolean,
  video: boolean,
}

function devices(state: State = initialState, action: Action) {
  switch (action.type) {
    case TOGGLE_AUDIO: {
      return {
        ...state,
        audio: !state.audio,
      };
    }
    case TOGGLE_VIDEO: {
      return {
        ...state,
        video: !state.video,
      };
    }
    default:
      return state;
  }
}

export default devices;
