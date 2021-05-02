import {MutableRefObject, useEffect, useRef, useState} from "react"
import io from "socket.io-client"

type User = {
  id: string,
  name: string,
}

export type MeetingHook = {
  users: User[],
  socketRef: MutableRefObject<SocketIOClient.Socket | null>,
}

export const useMeeting = (room: string): MeetingHook => {
  const [users, setUsers] = useState<User[]>([])
  const socketRef = useRef<SocketIOClient.Socket | null>(null)

  useEffect(() => {
    socketRef.current = io.connect('/')

    socketRef.current.on('users', (users: User[]) => {
      setUsers(users)
    })

    const name = prompt('Укажите своё имя')

    // socketRef.current?.on('connect', () => setUsersConnected(true))
    socketRef.current?.on('disconnect', () => {
      alert('Комната переполнена')
      window.location.href = '/'
    })

    socketRef.current?.emit('connect-room', {room, name})

    return () => {
      socketRef.current?.disconnect()
    }
  }, [room])

  return {
    users,
    socketRef,
  }
}