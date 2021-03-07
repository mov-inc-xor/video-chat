import {
  Button,
  Container,
  CssBaseline,
  Dialog, DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography
} from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import React, {useEffect, useRef, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Video from "../components/Video";

import store from '../redux/store';
import {connect} from "react-redux";
import {isAudioEnabled, isVideoEnabled} from "../redux/selectors";
import {toggleAudio, toggleVideo} from "../redux/actions";
import ControllersPanel from "../components/ControllersPanel";
import RoundSwitch from "../components/RoundSwitch";

import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';

import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined';
import {useVideoChat} from "../contexts/VideoChatContext";

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

type JoinMeetingProps = {
  users: object[],
  audioEnabled: boolean,
  videoEnabled: boolean,
  toggleAudio: (() => void),
  toggleVideo: (() => void),
}

function JoinMeeting({users, audioEnabled, videoEnabled, toggleAudio, toggleVideo}: JoinMeetingProps) {
  const classes = useStyles();

  const videoRef = React.createRef<HTMLVideoElement>();

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const videoChat = useVideoChat();

  // useEffect(() => {
  //   if (!audioEnabled && !videoEnabled) {
  //     return;
  //   }

  //   const enableMedia = async () => {
  //     const constraints = {
  //       audio: audioEnabled,
  //       video: videoEnabled,
  //     };
  //
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia(constraints);
  //
  //       if (videoRef.current) {
  //         videoRef.current.srcObject = stream;
  //       } else {
  //         alert('Не удается получить доступ к элементу video')
  //       }
  //     } catch(err) {
  //       setOpenDialog(true);
  //     }
  //   }
  //
  //   enableMedia();
  // }, [videoRef, audioEnabled, videoEnabled]);

  useEffect(() => {
    const enableVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        } else {
          alert('Не удается получить доступ к элементу video');
        }

        stream.getTracks().forEach(function(track) { track.stop(); });
      } catch (err) {
        setOpenDialog(true);
      }
    };

    if (videoEnabled) {
      enableVideo();
    }
  }, [videoEnabled, videoRef]);

  return (
    <>
      <CssBaseline/>

      <Container maxWidth={'lg'} className={classes.container}>
        <Grid container spacing={2} direction={'row'} alignItems={'center'} justify={'center'}>
          <Grid item xs={8} container alignItems={'center'} direction={'column'}>

            <Video ref={videoRef}/>


            <Grid item xs>
              <ControllersPanel>
                <RoundSwitch iconOn={<MicNoneOutlinedIcon/>} iconOff={<MicOffOutlinedIcon/>}
                             initialValue={audioEnabled}
                             toggle={toggleAudio}/>

                <RoundSwitch iconOn={<VideocamOutlinedIcon/>} iconOff={<VideocamOffOutlinedIcon/>}
                             initialValue={videoEnabled}
                             toggle={toggleVideo}/>
              </ControllersPanel>
            </Grid>
          </Grid>

          <Grid item xs container spacing={1} direction={'column'} alignItems={'center'} justify={'center'}>
            <Grid item>
              <Typography align={'center'} variant="h5" gutterBottom>
                Готовы присоединиться?
              </Typography>
            </Grid>

            <Grid item>
              <Typography align={'center'} variant="body1" gutterBottom>
                {users.length > 0 ? `Уже общаются ${users.length} человек(-а)` : `Пока никого нет`}
              </Typography>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<VideoCallIcon/>}
                onClick={videoChat.join}
              >
                Присоединиться
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Container>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Доступ к устройствам</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Разрешите доступ к камере и микрофону, чтобы собеседники могли видеть и слышать вас.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Хорошо
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state: any) => {
  const audioEnabled = isAudioEnabled(state);
  const videoEnabled = isVideoEnabled(state);

  return {audioEnabled, videoEnabled, toggleAudio, toggleVideo};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleAudio: () => dispatch(toggleAudio()),
    toggleVideo: () => dispatch(toggleVideo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinMeeting);