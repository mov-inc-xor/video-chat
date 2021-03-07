import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import {Drawer, Tabs, Typography, Tab, Box} from "@material-ui/core";
import {makeStyles, Theme, useTheme} from "@material-ui/core/styles";
import UsersList from "./UsersList";
import {useVideoChat} from "../contexts/VideoChatContext";
import Chat from "./Chat";
import ChatMessage from "./ChatMessage";

const drawerWidth = 340;

type TabPanelProps = {
  children?: React.ReactNode;
  index: any;
  value: any;
  className?: string,
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    overflow: 'hidden',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  chatTabPanel: {
    display: 'flex',
    flex: '1',
    overflow: 'hidden',
  }
}));

type ChatDrawerProps = {
  open: boolean,
  onClose: () => void,
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ChatDrawer({open, onClose}: ChatDrawerProps) {
  const classes = useStyles();
  const theme = useTheme();

  const [tabNumber, setTabNumber] = React.useState(0);

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabNumber(newValue);
  };

  const videoChat = useVideoChat();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>

        </div>
        <Divider/>

        <Tabs value={tabNumber} indicatorColor="primary" textColor="primary" onChange={handleChangeTab}
              aria-label="simple tabs example">
          <Tab label="Участники" {...a11yProps(0)} />
          <Tab label="Чат" {...a11yProps(1)} />
        </Tabs>
      </Box>


      <TabPanel value={tabNumber} index={0}>
        <UsersList users={videoChat.users}/>
      </TabPanel>

      <TabPanel value={tabNumber} index={1} className={classes.chatTabPanel}>
        <Chat>
          {Array.from(Array(50).keys()).map(() =>
            <ChatMessage name={'Вы'} text={'Привет'}/>
          )}
        </Chat>
      </TabPanel>
    </Drawer>
  );
}

export {ChatDrawer, drawerWidth};