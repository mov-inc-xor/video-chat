import React, { useEffect, useRef } from 'react'
import { MeetingHook } from './useMeeting'

type VideoChatHook = {
  (
    socketRef: MeetingHook,
    localVideoRef: React.RefObject<HTMLVideoElement>,
    remoteVideoRef: React.RefObject<HTMLVideoElement>
  ): void
}

export const useVideoChat: VideoChatHook = (
  meeting,
  localVideoRef,
  remoteVideoRef
) => {
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null)

  useEffect(() => {
    const { RTCPeerConnection, RTCSessionDescription } = window
    const socketRef = meeting.socketRef

    peerConnectionRef.current = new RTCPeerConnection()

    async function call(socketId: string) {
      const offer = await peerConnectionRef.current?.createOffer()

      if (!offer) {
        alert('Не удалось создать offer')
        return
      }

      await peerConnectionRef.current?.setLocalDescription(
        new RTCSessionDescription(offer)
      )

      socketRef.current?.emit('call', {
        offer,
        to: socketId,
      })
    }

    socketRef.current?.on(
      'call-made',
      async (data: { offer: RTCSessionDescriptionInit; socket: string }) => {
        await peerConnectionRef.current?.setRemoteDescription(
          new RTCSessionDescription(data.offer)
        )
        const answer = await peerConnectionRef.current?.createAnswer()

        if (!answer) {
          alert('Не удалось создать answer')
          return
        }

        await peerConnectionRef.current?.setLocalDescription(
          new RTCSessionDescription(answer)
        )

        socketRef.current?.emit('make-answer', {
          answer,
          to: data.socket,
        })
      }
    )

    socketRef.current?.on(
      'answer-made',
      async (data: { answer: RTCSessionDescriptionInit; socket: string }) => {
        await peerConnectionRef.current?.setRemoteDescription(
          new RTCSessionDescription(data.answer)
        )

        await call(data.socket)
      }
    )

    peerConnectionRef.current.ontrack = function ({ streams: [stream] }) {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = stream
      }
    }

    navigator.getUserMedia(
      { video: true, audio: true },
      (stream) => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream
        }

        stream
          .getTracks()
          .forEach((track) =>
            peerConnectionRef.current?.addTrack(track, stream)
          )
      },
      (error) => {
        console.warn(error.message)
      }
    )
  }, [meeting.socketRef, localVideoRef, remoteVideoRef])
}
