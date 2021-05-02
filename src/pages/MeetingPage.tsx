import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme, Theme, createStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import BottomPanel from "../components/BottomPanel";
import {ChatDrawer, drawerWidth} from "../components/ChatDrawer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }),
);

function VideoChat() {
  const classes = useStyles();
  const [chatOpen, setChatOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: chatOpen,
        })}
      >
        {/*<div className={classes.drawerHeader}/>*/}
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>

      <ChatDrawer open={chatOpen} onClose={() => setChatOpen(false)} users={[]} />

      <BottomPanel onChatOpen={() => setChatOpen(true)} />
    </div>
  );
}

export default VideoChat;