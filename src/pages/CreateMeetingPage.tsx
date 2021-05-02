import React, {useState} from "react"

import {
  Grid,
  InputAdornment,
  Button,
  TextField,
  Paper,
  Typography,
  Container,
  CssBaseline,
  Backdrop,
  CircularProgress,
} from "@material-ui/core"

import {makeStyles} from '@material-ui/core/styles'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import KeyboardIcon from '@material-ui/icons/Keyboard'
import useTextField from "../hooks/useTextField"
import LinkDialog from "../components/LinkDialog"
import useLinkDialog from "../hooks/useLinkDialog"

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
  },
}))

function CreateMeeting() {
  const classes = useStyles()
  const linkDialog = useLinkDialog()

  const [backdropOpened, setBackdropOpened] = useState<boolean>(false)

  const startMeeting = () => {
    setBackdropOpened(true)

    const handleResult = async (result: Response) => {
      if (result.ok) {
        const json = await result.json()

        if (json.error) {
          alert(json.error)
        }

        linkDialog.setToken(json.token)
        linkDialog.show()
      } else {
        alert(result.statusText)
      }
    }

    fetch('/api/room', {
      method: 'post',
    })
      .then(result => handleResult(result))
      .catch(reason => alert(reason))
      .finally(() => setBackdropOpened(false))
  }

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="sm" className={classes.container}>
        <Paper className={classes.paper} variant={"outlined"}>
          <Grid container spacing={2} direction={"column"}>
            <Grid item>
              <Typography variant="h5" gutterBottom>
                Начать видеоконференцию
              </Typography>

              <Typography variant="overline" display="block" gutterBottom>
                Создайте комнату для видеоконференции
              </Typography>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<VideoCallIcon/>}
                onClick={startMeeting}
              >
                Новая встреча
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Backdrop className={classes.backdrop} open={backdropOpened}>
          <CircularProgress color="inherit"/>
        </Backdrop>

        <LinkDialog {...linkDialog.bind} />

      </Container>
    </>
  )
}

export default CreateMeeting