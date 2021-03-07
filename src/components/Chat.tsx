import {Box, Grid} from "@material-ui/core";
import {makeStyles, Theme} from "@material-ui/core/styles";
import ChatSendPanel from "./ChatSendPanel";
import useTextField from "../hooks/useTextField";

type ChatProps = {
  children?: React.ReactNode,
}

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

function Chat({children}: ChatProps) {
  const classes = useStyles();
  const messageTextField = useTextField('Сообщение');

  return (
    <Box className={classes.chat}>
      <Box className={classes.messagesContainer} m={2}>
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Box>

      <ChatSendPanel {...messageTextField.bind}/>
    </Box>
  );
}

export default Chat;