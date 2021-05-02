// export const getDevicesState = (store: any) => store.devices;

export const getDevicesState = (store: any) => {
  return store.devices;
}

export const isAudioEnabled = (store: any) => {
  const state = getDevicesState(store);
  return state ? state.audio : false;
}

export const isVideoEnabled = (store: any) => {
  const state = getDevicesState(store);
  return state ? state.video : false;
}

export const getLocalStream = (store: any) => {
  return store.stream.localStream
}