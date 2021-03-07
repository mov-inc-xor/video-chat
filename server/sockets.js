import {Server} from 'socket.io';
import {createServer} from "http";


const usernames = new Map();

const getRoom = (socket) => {
  return Array(...socket.rooms)[1];
}

const onLeaveRoom = (socket) => {
  const username = usernames.get(socket.id);
  usernames.delete(socket.id);
  socket.to(getRoom(socket)).emit('user-leave', username);
}

const onJoinRoom = (socket, username) => {
  usernames.set(socket.id, username);
  socket.to(getRoom(socket)).emit('user-join', username);
}

const onConnectRoom = (socket, room) => {
  const username = usernames.get(socket.id);

  socket.join(room);
  socket.emit('users', Array(...usernames.values()).filter(name => name !== username));
};

const onDisconnecting = (socket, reason) => {
  console.log(`Пользователь отключился по причине: ${reason}`);

  onLeaveRoom(socket);
};

const onConnection = (socket) => {
  console.log(`Пользователь подключился`);

  const handle = (handler) => {
    return (data) => handler(socket, data);
  };

  socket.on('connect-room', handle(onConnectRoom));
  socket.on('enter-room', handle(onJoinRoom));

  socket.on('disconnecting', handle(onDisconnecting));
};

const listen = (app) => {
  const server = createServer(app);
  const io = new Server(server);

  io.on('connection', onConnection);

  return server;
};

export default listen;