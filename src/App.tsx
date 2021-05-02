import { StartPage } from './pages/StartPage'
import MeetingPage from './pages/MeetingPage'
import { usePeer } from './hooks/usePeer'
import { useRef } from 'react'

function App() {
  const localVideoRef = useRef<HTMLVideoElement | null>(null)
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null)
  const peer = usePeer(localVideoRef, remoteVideoRef)

  return !peer.speaking ? (
    <StartPage peer={peer} />
  ) : (
    <MeetingPage
      peer={peer}
      localVideoRef={localVideoRef}
      remoteVideoRef={remoteVideoRef}
    />
  )
}

export default App
