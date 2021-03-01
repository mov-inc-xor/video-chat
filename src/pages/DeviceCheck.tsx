import React, {useEffect, useState} from "react";

import {
  Backdrop, Button,
  CircularProgress, Container, CssBaseline, Grid, Typography
} from "@material-ui/core";

import {useParams} from 'react-router-dom';

import {makeStyles} from "@material-ui/core/styles";
import {response} from "express";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  video: {
    backgroundColor: 'gray',
    width: '100%',
  }
}));

function DeviceCheck() {
  const [backdropOpened, setBackdropOpened] = useState<boolean>(false);

  const classes = useStyles();
  const {room} = useParams<{ room: string }>();

  // useEffect(() => {
  //   fetch(`/api/room/${room}`)
  //     .then((response) => )
  //     .catch((reason) => console.log(reason))
  //     .finally(() => setBackdropOpened(false));
  // }, [room])

  return (
    <>
      <CssBaseline/>

      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3} direction={'row'} alignItems={'center'} justify={'center'}>
          <Grid item>
            <video autoPlay className={classes.video}/>
          </Grid>

          <Grid item>
            <Typography variant="h5" gutterBottom>
              Готовы присоединиться?
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<VideoCallIcon/>}
            >
              Присоединиться
            </Button>
          </Grid>
        </Grid>

      </Container>

      <Backdrop className={classes.backdrop} open={backdropOpened}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    </>
  );
}

export default DeviceCheck;