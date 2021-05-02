import {Box, Grid} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ChatSendPanel from "./ChatSendPanel";
import useTextField from "../hooks/useTextField";
import React from "react"

const useStyles = makeStyles((theme: Theme) => ({
  chat: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  },
  messagesContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'safe flex-start',
    overflowX: 'hidden',
    overflowY: 'auto',
  }
}));

type ChatProps = {
  children?: React.ReactNode,
  onSend: (text: string) => void,
}

export function Chat({children, onSend}: ChatProps) {
  const classes = useStyles();
  const messageTextField = useTextField('Сообщение');

  const send = (text: string) => {
    onSend(text)
    messageTextField.clear()
  }

  return (
    <Box className={classes.chat}>
      <Box className={classes.messagesContainer} m={2}>
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Box>

      <ChatSendPanel {...messageTextField.bind} onSend={send}/>
    </Box>
  );
}