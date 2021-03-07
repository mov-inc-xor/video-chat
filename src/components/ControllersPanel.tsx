import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: '5px 5px 0 0',
    backgroundColor: 'white',
    display: 'flex',
    position: 'relative',
    bottom: '47px',
  }
}));

type ControllersPanelProps = {
  children: React.ReactNode,
}

function ControllersPanel({children} : ControllersPanelProps) {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      {children}
    </Box>
  )
}

export default ControllersPanel;