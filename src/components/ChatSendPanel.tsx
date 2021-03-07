import {Box, IconButton, Input, TextField} from "@material-ui/core";
import React, {ChangeEvent} from "react";

import SendIcon from '@material-ui/icons/Send';
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    // position: 'sticky',
    display: 'flex',
    // bottom: 0,
    backgroundColor: 'white',
    borderTop: '1px solid #eaeaea',
    width: '100%',
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight: theme.spacing(1),
  }
}))

type ChatSendPanelProps = {
  value: string,
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  label: string,
}

function ChatSendPanel({value, onChange, label}: ChatSendPanelProps) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <TextField
        label={label}
        fullWidth
        multiline
        rowsMax={4}
        value={value}
        onChange={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <IconButton color={'primary'} onClick={() => {}}>
        <SendIcon />
      </IconButton>
    </Box>
  )
}

export default ChatSendPanel;