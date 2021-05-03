import { makeStyles, Theme } from '@material-ui/core/styles'
import { Badge, Divider, Grid, IconButton } from '@material-ui/core'
import { RoundSwitcher } from './RoundSwitcher'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined'
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined'
import VideocamOffOutlinedIcon from '@material-ui/icons/VideocamOffOutlined'
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined'
import CallEndIcon from '@material-ui/icons/CallEnd'
import { isAudioEnabled, isVideoEnabled } from '../redux/selectors'
import { toggleAudio, toggleVideo } from '../redux/actions'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme: Theme) => ({
  panel: {
    position: 'absolute',
    bottom: '15px',
    background: 'white',
    borderRadius: '7px',
    width: 'auto',
    margin: 'auto',
  },
}))

type BottomPanelProps = {
  toggleChatOpened: () => void
  audioEnabled: boolean
  videoEnabled: boolean
  toggleAudio: () => void
  toggleVideo: () => void
  endCall: () => void
  newMessages: boolean
}

function BottomPanel({
  toggleChatOpened,
  audioEnabled,
  videoEnabled,
  toggleAudio,
  toggleVideo,
  endCall,
  newMessages,
}: BottomPanelProps) {
  const classes = useStyles()

  return (
    <Grid className={classes.panel} item container>
      <RoundSwitcher
        iconOn={<MicNoneOutlinedIcon />}
        iconOff={<MicOffOutlinedIcon />}
        initialValue={audioEnabled}
        toggle={toggleAudio}
      />

      <RoundSwitcher
        iconOn={<VideocamOutlinedIcon />}
        iconOff={<VideocamOffOutlinedIcon />}
        initialValue={videoEnabled}
        toggle={toggleVideo}
      />

      <Divider orientation='vertical' flexItem />

      <IconButton color={'secondary'} onClick={endCall}>
        <CallEndIcon />
      </IconButton>

      <IconButton color={'default'} onClick={toggleChatOpened}>
        <Badge color='secondary' variant='dot' invisible={!newMessages}>
          <TextsmsOutlinedIcon />
        </Badge>
      </IconButton>
    </Grid>
  )
}

const mapStateToProps = (state: any) => {
  const audioEnabled = isAudioEnabled(state)
  const videoEnabled = isVideoEnabled(state)

  return { audioEnabled, videoEnabled, toggleAudio, toggleVideo }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleAudio: () => dispatch(toggleAudio()),
    toggleVideo: () => dispatch(toggleVideo()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomPanel)
