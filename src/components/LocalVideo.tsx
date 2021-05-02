import React, { ForwardedRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  video: {
    height: '250px',
    position: 'absolute',
    top: '0',
    objectFit: 'cover',
    backgroundColor: '#263238',
    borderRadius: '10px',
  },
}))

export const LocalVideo = React.forwardRef((props, ref: ForwardedRef<HTMLVideoElement>) => {
  const classes = useStyles()
  
  return <video {...props} ref={ref} autoPlay className={classes.video} />
})
