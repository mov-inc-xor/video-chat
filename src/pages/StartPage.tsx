import { useState } from 'react'

import {
  Grid,
  Paper,
  Typography,
  Container,
  CssBaseline,
  Backdrop,
  CircularProgress,
  TextField,
  IconButton,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { ClipboardField } from '../components/ClipboardField'
import CallIcon from '@material-ui/icons/Call'
import { PeerHook } from '../hooks/usePeer'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(5),
    marginTop: -theme.spacing(20),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
}))

type StartPageProps = {
  peer: PeerHook
}

export function StartPage({ peer }: StartPageProps) {
  const classes = useStyles()

  const [backdropOpened, setBackdropOpened] = useState<boolean>(false)

  const [remotePeerId, setRemotePeerId] = useState<string>('')

  const changeRemotePeerId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.replaceAll(' ', '')
    setRemotePeerId(text)
  }

  const call = () => {
    setBackdropOpened(true)
    peer
      .callUser(remotePeerId)
      .catch((reason) => alert(reason))
      .finally(() => setBackdropOpened(false))
  }

  const endCall = () => {
    peer.endCall()
    setBackdropOpened(false)
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth='sm' className={classes.container}>
        <Paper className={classes.paper} variant={'outlined'}>
          <Grid container spacing={2} direction={'column'}>
            <Grid item>
              <Typography variant='h5' gutterBottom>
                Начните звонок
              </Typography>

              <TextField
                value={remotePeerId}
                onChange={changeRemotePeerId}
                label='ID собеседника'
              />

              <IconButton color='primary' onClick={call}>
                <CallIcon />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography variant='overline' display='block' gutterBottom>
                или поделитесь своим <b>ID</b>
              </Typography>

              <ClipboardField text={peer.id} />
            </Grid>
          </Grid>
        </Paper>

        <Backdrop className={classes.backdrop} open={backdropOpened} onClick={endCall}>
          <CircularProgress color='inherit' />
          
          <Typography>
            Звоним...
          </Typography>
        </Backdrop>
      </Container>
    </>
  )
}
