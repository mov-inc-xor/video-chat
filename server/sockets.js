import {Server} from 'socket.io'
import {createServer} from "http"
import { v4 as uuidv4 } from 'uuid';

const MAX_USERS_IN_ROOM = 2

let io
const connectedUsers = new Map()

const getRoom = (socket) => {
  return Array(...socket.rooms)[1]
}

const usersInRoom = (currentRoom) => {
  return Array.from(connectedUsers.entries())
    .filter(([_, {room}]) => room === currentRoom)
    .map(([id, {name}]) => ({id, name}))
}

const onLeaveRoom = (socket) => {
  const room = getRoom(socket)
  connectedUsers.delete(socket.id)
  io.sockets.in(room).emit('users', usersInRoom(room))
}

const onConnectRoom = (socket, {room, name}) => {
  const users = usersInRoom(room)

  if (users.length + 1 > MAX_USERS_IN_ROOM) {
    console.log(`Пользователь ${name} пытался подключиться к комнате ${room}, но она заполнена`)
    socket.disconnect()
    return
  }

  console.log(`Пользователь ${name} подключился к комнате ${room}`)

  socket.join(room)
  connectedUsers.set(socket.id, {room, name})

  io.sockets.in(room).emit('users', usersInRoom(room))

  if (users.length === MAX_USERS_IN_ROOM - 1) {
    io.sockets.in(room).emit('users-connected')
  }
}

const onMessage = (socket, text) => {
  const currentTime = () => {
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()

    return `${hours}:${minutes}`
  }

  const name = connectedUsers.get(socket.id).name
  const time = currentTime()

  console.log(`Пользователь ${name} отправил сообщение "${text}" в ${time}`)

  const msg = {
    id: uuidv4(),
    fromID: socket.id,
    name,
    time,
    text,
  }

  io.sockets.in(getRoom(socket)).emit('message', msg)
}

const onDisconnecting = (socket, reason) => {
  console.log(`Пользователь отключился по причине: ${reason}`)

  onLeaveRoom(socket)
}

const onConnection = (socket) => {
  console.log(`Пользователь подключился`)

  const handle = (handler) => {
    return (data) => handler(socket, data)
  }

  socket.on('connect-room', handle(onConnectRoom))
  socket.on('message', handle(onMessage))
  socket.on('disconnecting', handle(onDisconnecting))
}

export const listen = (app) => {
  const server = createServer(app)
  io = new Server(server)

  io.on('connection', onConnection)

  return server
}