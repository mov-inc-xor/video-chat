import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import { Drawer, Box } from '@material-ui/core'
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'

export const drawerWidth = 310

type TabPanelProps = {
  children?: React.ReactNode
  index: any
  value: any
  className?: string
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  )
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
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  chatTabPanel: {
    display: 'flex',
    flex: '1',
    overflow: 'hidden',
  },
}))

type ChatDrawerProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function ChatPanel({ open, onClose, children }: ChatDrawerProps) {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      className={classes.drawer}
      anchor='right'
      open={open}
      onClose={onClose}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box>
        <div className={classes.drawerHeader}>
          <IconButton onClick={onClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
      </Box>

      <TabPanel value={0} index={0} className={classes.chatTabPanel}>
        {children}
      </TabPanel>
    </Drawer>
  )
}