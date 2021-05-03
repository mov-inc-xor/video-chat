import {
  OPEN_CHAT,
  CLOSE_CHAT,
  ENABLE_MSG_BADGE,
  DISABLE_MSG_BADGE,
} from '../actionTypes'
import { Action } from '../actions'

const initialState = {
  chatOpened: false,
  newMessages: false,
}

type State = {
  chatOpened: boolean
  newMessages: boolean
}

export function chat(state: State = initialState, action: Action) {
  switch (action.type) {
    case OPEN_CHAT:
      return { ...state, chatOpened: true }
    case CLOSE_CHAT:
      return { ...state, chatOpened: false }
    case ENABLE_MSG_BADGE:
      return { ...state, newMessages: !state.chatOpened && action.payload }
    case DISABLE_MSG_BADGE:
      return { ...state, newMessages: false }
    default:
      return state
  }
}
