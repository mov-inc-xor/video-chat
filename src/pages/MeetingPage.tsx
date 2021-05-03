import React from 'react'
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
import {
  isAudioEnabled,
  isChatOpened,
  isNewMessages,
  isVideoEnabled,
} from '../redux/selectors'
import { useEffect } from 'react'
import {
  openChat,
  closeChat,
  enableMsgBadge,
  disableMsgBadge,
} from '../redux/actions'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: '#171717',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      alignItems: 'center',
    },
  })
)

type MeetingPageProps = {
  peer: PeerHook
  localVideoRef: React.RefObject<HTMLVideoElement>
  remoteVideoRef: React.RefObject<HTMLVideoElement>
  audioEnabled: boolean
  videoEnabled: boolean
  chatOpened: boolean
  newMessages: boolean
  openChat: () => void
  closeChat: () => void
  enableMsgBadge: (value: boolean) => void
  disableMsgBadge: () => void
}

function MeetingPage({
  peer,
  localVideoRef,
  remoteVideoRef,
  audioEnabled,
  videoEnabled,
  chatOpened,
  newMessages,
  openChat,
  closeChat,
  enableMsgBadge,
  disableMsgBadge,
}: MeetingPageProps) {
  const classes = useStyles()

  useEffect(() => {
    peer.setAudio(audioEnabled)
  }, [peer, audioEnabled])

  useEffect(() => {
    peer.setVideo(videoEnabled)
  }, [peer, videoEnabled])

  useEffect(() => {
    enableMsgBadge(peer.messages.length !== 0)
  }, [peer.messages])

  const toggleChat = () => {
    openChat()
    disableMsgBadge()
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.main}>
        <LocalVideo ref={localVideoRef} />
        <FullSizeVideo ref={remoteVideoRef} />
      </main>

      <ChatPanel open={chatOpened} onClose={closeChat}>
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

      <BottomPanel
        toggleChatOpened={toggleChat}
        endCall={peer.endCall}
        newMessages={newMessages}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => {
  const audioEnabled = isAudioEnabled(state)
  const videoEnabled = isVideoEnabled(state)
  const chatOpened = isChatOpened(state)
  const newMessages = isNewMessages(state)

  return { audioEnabled, videoEnabled, chatOpened, newMessages }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    openChat: () => dispatch(openChat()),
    closeChat: () => dispatch(closeChat()),
    enableMsgBadge: (value: boolean) => dispatch(enableMsgBadge(value)),
    disableMsgBadge: () => dispatch(disableMsgBadge()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeetingPage)
