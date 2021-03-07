import {TOGGLE_AUDIO, TOGGLE_VIDEO} from "./actionTypes";

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