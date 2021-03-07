import {makeStyles, Theme} from "@material-ui/core/styles";
import {Badge, Box, Divider, Grid, IconButton} from "@material-ui/core";
import React from "react";
import RoundSwitch from "./RoundSwitch";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import MicOffOutlinedIcon from "@material-ui/icons/MicOffOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import VideocamOffOutlinedIcon from "@material-ui/icons/VideocamOffOutlined";
import ControllersPanel from "./ControllersPanel";

import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import CallEndIcon from '@material-ui/icons/CallEnd';
import {useVideoChat} from "../contexts/VideoChatContext";
import {isAudioEnabled, isVideoEnabled} from "../redux/selectors";
import {toggleAudio, toggleVideo} from "../redux/actions";
import {connect} from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
  panel: {
    position: 'absolute',
    bottom: 0,
    padding: theme.spacing(1),
    backgroundColor: 'white',
    width: '100vw',
    borderTop: '1px solid #eaeaea'
  }
}));

type BottomPanelProps = {
  onChatOpen: (() => void),
  audioEnabled: boolean,
  videoEnabled: boolean,
  toggleAudio: (() => void),
  toggleVideo: (() => void),
}

function BottomPanel({onChatOpen, audioEnabled, videoEnabled, toggleAudio, toggleVideo}: BottomPanelProps) {
  const classes = useStyles();

  const videoChat = useVideoChat();

  return (
    <Box className={classes.panel}>
      <Grid container justify={'center'}>

        <Grid item container alignItems={'center'} justify={'center'}>
          <RoundSwitch iconOn={<MicNoneOutlinedIcon/>} iconOff={<MicOffOutlinedIcon/>}
                       initialValue={audioEnabled}
                       toggle={toggleAudio}/>

          <RoundSwitch iconOn={<VideocamOutlinedIcon/>} iconOff={<VideocamOffOutlinedIcon/>}
                       initialValue={videoEnabled}
                       toggle={toggleVideo}/>

          <Divider orientation="vertical" flexItem />

          <IconButton color={'secondary'} onClick={videoChat.leave}>
            <CallEndIcon />
          </IconButton>

          <IconButton color={'default'} onClick={onChatOpen}>
            <Badge color="secondary" variant="dot" invisible={false}>
              <TextsmsOutlinedIcon />
            </Badge>
          </IconButton>

        </Grid>
      </Grid>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(BottomPanel);