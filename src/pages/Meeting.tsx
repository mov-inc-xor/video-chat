import React, {useEffect, useState} from "react";
import socketIOClient from 'socket.io-client';

import {
  Backdrop, Button,
  CircularProgress, Container, CssBaseline, Grid, Typography
} from "@material-ui/core";

import {useParams} from 'react-router-dom';

import {makeStyles} from "@material-ui/core/styles";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import JoinMeeting from "./JoinMeeting";
import VideoChat from "./VideoChat";
import {useVideoChat, VideoChatProvider} from "../contexts/VideoChatContext";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function Meeting() {
  const [backdropOpened, setBackdropOpened] = useState<boolean>(false);
  const [joined, setJoined] = useState<boolean>(true);

  const classes = useStyles();
  const {room} = useParams<{ room: string }>();

  const videoChat = useVideoChat();

  const users = [
    {
      id: 'awfawag',
      name: 'Илья',
    },
    {
      id: 'geherkohe',
      name: 'Алина',
    },
    {
      id: 'awfaeffinwag',
      name: 'Никита',
    },
  ];

  // useEffect((): (() => void) => {
  //   const socket = socketIOClient('http://127.0.0.1:5000', {transports: ['websocket']});
  //
  //   socket.emit('connect-room', room);
  //
  //   socket.on('users', (users: string[]) => {
  //     console.log(users);
  //   });
  //
  //   return () => socket.disconnect();
  // }, [room]);

  return (
    <>
      <CssBaseline/>


      {videoChat.joined ? <VideoChat/> : <JoinMeeting users={users}/>}


      <Backdrop className={classes.backdrop} open={backdropOpened}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    </>
  );
}

export default Meeting;