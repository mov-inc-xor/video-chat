import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import BottomPanel from '../components/BottomPanel'
import { PeerHook } from '../hooks/usePeer'
import { LocalVideo } from '../components/LocalVideo'
import { FullSizeVideo } from '../components/FullSizeVideo'
import { ChatPanel } from '../components/ChatPanel'
import { Chat } from '../components/Chat'
import ChatMessage from '../components/ChatMessage'
import { connect } from 'react-redux'
import { isAudioEnabled, isVideoEnabled } from '../redux/selectors'
import { useEffect } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    root: {
      display: 'flex',
      height: '100vh',
      justifyContent: 'space-between',
    },
  })
)

type MeetingPageProps = {
  peer: PeerHook
  localVideoRef: React.RefObject<HTMLVideoElement>
  remoteVideoRef: React.RefObject<HTMLVideoElement>
  audioEnabled: boolean
  videoEnabled: boolean
}

function MeetingPage({
  peer,
  localVideoRef,
  remoteVideoRef,
  audioEnabled,
  videoEnabled,
}: MeetingPageProps) {
  const classes = useStyles()
  const [chatOpened, setChatOpened] = useState(false)

  useEffect(() => {
    peer.setAudio(audioEnabled)
  }, [peer, audioEnabled])

  useEffect(() => {
    peer.setVideo(videoEnabled)
  }, [peer, videoEnabled])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.main}>
        <LocalVideo ref={localVideoRef} />
        <FullSizeVideo ref={remoteVideoRef} />
      </main>

      <ChatPanel open={chatOpened} onClose={() => setChatOpened(false)}>
        <Chat onSend={(text) => peer.sendMessage(text)}>
          {peer.messages.map((msg) => (
            <ChatMessage
              name={peer.id === msg.fromID ? 'Вы' : 'Собеседник'}
              key={msg.id}
              text={msg.text}
              time={msg.time}
            />
          ))}
        </Chat>
      </ChatPanel>

      <BottomPanel toggleChatOpened={() => setChatOpened(!chatOpened)} endCall={peer.endCall} />

      {/*<Backdrop open={!meeting.connected}>*/}
      {/*  <CircularProgress color="inherit" />*/}
      {/*</Backdrop>*/}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const audioEnabled = isAudioEnabled(state);
  const videoEnabled = isVideoEnabled(state);

  return {audioEnabled, videoEnabled};
};

export default connect(mapStateToProps)(MeetingPage);