import {useEffect, useRef, useState} from "react"
import io from "socket.io-client"

type User = {
  id: string,
  name: string,
}

type Message = {
  id: string,
  fromID: string,
  name: string,
  text: string,
  time: string,
}

export const useChat = (room: string) => {
  const [users, setUsers] = useState<User[]>([])
  const [messages, setMessages] = useState<Message[]>([])

  const socketRef = useRef<SocketIOClient.Socket | null>(null)

  useEffect(() => {
    socketRef.current = io.connect('/')

    socketRef.current.on('users', (users: User[]) => {
      setUsers(users)
    })

    socketRef.current.on('message', (message: Message) => {
      if (message.fromID === socketRef.current?.id) {
        message.name = 'Вы'
      }
      setMessages(messages => [...messages, message])
    })

    const name = prompt('Укажите своё имя')

    socketRef.current.emit('connect-room', {room, name})

    return () => {
      socketRef.current?.disconnect()
    }
  }, [room])

  const sendMessage = (text: string) => {
    socketRef.current?.emit('message', text)
  }

  return {
    users,
    messages,
    sendMessage,
  }
}