import React, {useEffect, useState} from "react"

type Message = {
  id: string,
  fromID: string,
  name: string,
  text: string,
  time: string,
}

export const useTextChat = (socketRef: React.RefObject<SocketIOClient.Socket>) => {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    socketRef.current?.on('message', (message: Message) => {
      if (message.fromID === socketRef.current?.id) {
        message.name = 'Вы'
      }
      setMessages(messages => [...messages, message])
    })
  }, [socketRef])

  const sendMessage = (text: string) => {
    socketRef.current?.emit('message', text)
  }

  return {
    messages,
    sendMessage,
  }
}