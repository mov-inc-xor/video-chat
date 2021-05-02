import {
  TOGGLE_AUDIO,
  TOGGLE_VIDEO,
  SET_LOCAL_STREAM
} from "./actionTypes";

export type Action = {
  type: string,
  payload?: any,
}

export const toggleAudio = (): Action => ({
  type: TOGGLE_AUDIO,
});

export const toggleVideo = (): Action => ({
  type: TOGGLE_VIDEO,
});

export const setLocalStream = (stream: MediaStream): Action => ({
  type: SET_LOCAL_STREAM,
  payload: stream,
})