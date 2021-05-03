export const getDevicesState = (store: any) => {
  return store.devices
}

export const getChatState = (store: any) => {
  return store.chat
}

export const isAudioEnabled = (store: any) => {
  const state = getDevicesState(store)
  return state ? state.audio : false
}

export const isVideoEnabled = (store: any) => {
  const state = getDevicesState(store)
  return state ? state.video : false
}

export const isChatOpened = (store: any) => {
  const state = getChatState(store)
  return state ? state.chatOpened : false
}

export const isNewMessages = (store: any) => {
  const state = getChatState(store)
  return state ? state.newMessages : false
}