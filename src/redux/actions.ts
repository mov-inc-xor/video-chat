import { CLOSE_CHAT, DISABLE_MSG_BADGE, ENABLE_MSG_BADGE, OPEN_CHAT, TOGGLE_AUDIO, TOGGLE_VIDEO } from './actionTypes'

export type Action = {
  type: string
  payload?: any
}

export const toggleAudio = (): Action => ({
  type: TOGGLE_AUDIO,
})

export const toggleVideo = (): Action => ({
  type: TOGGLE_VIDEO,
})

export const openChat = (): Action => ({
  type: OPEN_CHAT,
})

export const closeChat = (): Action => ({
  type: CLOSE_CHAT,
})

export const enableMsgBadge = (value: boolean): Action => ({
  type: ENABLE_MSG_BADGE,
  payload: value,
})

export const disableMsgBadge = (): Action => ({
  type: DISABLE_MSG_BADGE,
})