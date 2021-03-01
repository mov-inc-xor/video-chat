import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ClipboardField from "./ClipboardField";
import {Grid} from "@material-ui/core";
import VideoCallIcon from "@material-ui/icons/VideoCall";

import {Link} from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      paddingX: theme.spacing(4),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    paddingX: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
}))(MuiDialogActions);

type LinkDialogProps = {
  open: boolean,
  setOpen: (opened: boolean) => void,
  token: string,
}

function LinkDialog({open, setOpen, token}: LinkDialogProps) {
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog maxWidth={'xs'} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Ссылка на видеоконференцию
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2} direction={'column'}>
          <Grid item>
            <Typography variant={"body2"} gutterBottom>
              Скопируйте эту ссылку и поделитесь с теми, кого хотите пригласить. Вы можете начать позже, открыв эту
              ссылку.
            </Typography>
          </Grid>

          <Grid item>
            <ClipboardField text={window.location.href + token}/>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Typography variant={"overline"}>
          или
        </Typography>

        <Link to={token}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<VideoCallIcon/>}

          >
            Начать сейчас
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
}

export default LinkDialog;