import Peer, { DataConnection } from 'peerjs'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export type PeerHook = {
  id: string
  callUser: (peerId: string) => Promise<boolean>
  speaking: boolean
  messages: Message[]
  sendMessage: (text: string) => void
  endCall: () => void
  setAudio: (value: boolean) => void
  setVideo: (value: boolean) => void
}

type UsePeer = {
  (
    localVideoRef: React.RefObject<HTMLVideoElement>,
    remoteVideoRef: React.RefObject<HTMLVideoElement>
  ): PeerHook
}

type Message = {
  id: string
  fromID: string
  text: string
  time: string
}

export const usePeer: UsePeer = (localVideoRef, remoteVideoRef) => {
  const peerRef = useRef<Peer | null>(null)
  const connRef = useRef<DataConnection | null>(null)
  const localStream = useRef<MediaStream | null>(null)

  const [id, setId] = useState<string>('...')
  const [speaking, setSpeaking] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const generatedId = uuidv4()

    setId(generatedId)

    peerRef.current = new Peer(generatedId)

    peerRef.current.on('connection', (conn) => {
      connRef.current = conn

      connRef.current.on('data', (data) => {
        const msg: Message = data
        setMessages((messages) => [...messages, msg])
      })
    })

    peerRef.current.on('call', (call) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          localStream.current = stream

          call.answer(stream)
          call.on('stream', (remoteStream) => {
            setSpeaking(true)

            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream
            }

            if (localVideoRef.current) {
              localVideoRef.current.srcObject = stream
            }
          })

          call.on('close', () => {
            endCall()
          })
        })
        .catch(() => {
          endCall()
        })
    })

    return () => peerRef.current?.disconnect()
  }, [localVideoRef, remoteVideoRef])

  const callUser = (peerId: string) => {
    return new Promise<boolean>((resolve, reject) => {
      if (!peerRef.current) {
        alert('Не удалось создать пир')
        return
      }

      connRef.current = peerRef.current.connect(peerId)

      if (!connRef.current) {
        reject(new Error('Не удается начать звонок, обновите страницу'))
        return
      }

      connRef.current.on('data', (data) => {
        const msg: Message = data
        setMessages((messages) => [...messages, msg])
      })

      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          localStream.current = stream

          if (!peerRef.current) {
            alert('Не удалось создать пир')
            return
          }

          const call = peerRef.current.call(peerId, stream)

          call.on('stream', (remoteStream) => {
            setSpeaking(true)

            if (remoteVideoRef.current) {
              remoteVideoRef.current.srcObject = remoteStream
            }

            if (localVideoRef.current) {
              localVideoRef.current.srcObject = stream
            }

            resolve(true)
          })

          call.on('close', () => {
            endCall()
          })
        })
        .catch(() => {
          setSpeaking(false)
          reject(new Error('Разрешите доступ к устройствам'))
        })
    })
  }

  const sendMessage = (text: string) => {
    const currentTime = () => {
      const date = new Date()

      let hours = date.getHours().toString()
      let minutes = date.getMinutes().toString()

      if (hours.length < 2) {
        hours = '0' + hours
      }

      if (minutes.length < 2) {
        minutes = '0' + minutes
      }

      return `${hours}:${minutes}`
    }

    const msg = {
      id: uuidv4(),
      fromID: id,
      text,
      time: currentTime(),
    }

    setMessages((messages) => [...messages, msg])

    connRef.current?.send(msg)
  }

  const endCall = () => {
    connRef.current?.close()
    peerRef.current?.disconnect()
    window.location.reload()
  }

  const setAudio = (value: boolean) => {
    localStream.current?.getAudioTracks().forEach(track => track.enabled = value)
  }

  const setVideo = (value: boolean) => {
    localStream.current?.getVideoTracks().forEach(track => track.enabled = value)
  }

  return {
    id,
    callUser,
    speaking,
    messages,
    sendMessage,
    endCall,
    setAudio,
    setVideo,
  }
}
