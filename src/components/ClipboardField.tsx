import React, {useState} from 'react';
import copy from 'clipboard-copy';

import {
  InputAdornment,
  IconButton,
  TextField,
  Snackbar, Box,
} from "@material-ui/core";

import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import CloseIcon from "@material-ui/icons/Close";

type ClipboardFieldProps = {
  text: string,
}

function ClipboardField({text}: ClipboardFieldProps) {

  const [snackbarOpened, setSnackbarOpened] = useState<boolean>(false);

  const copyToClipboard = () => {
    copy(text);
    setSnackbarOpened(true);
  };

  const handleClose = () => {
    setSnackbarOpened(false);
  };

  return (
    <>
      <TextField
        type='text'
        value={text}
        fullWidth={true}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="copy to clipboard"
                onClick={copyToClipboard}
                edge="end"
              >
                <FileCopyOutlinedIcon/>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Snackbar open={snackbarOpened} autoHideDuration={3000} onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                message='Ссылка скопирована'
                action={
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small"/>
                  </IconButton>
                }
      />
    </>
  );
}

export default ClipboardField;