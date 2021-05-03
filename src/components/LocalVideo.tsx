import React, { ForwardedRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  video: {
    width: '200px',
    position: 'absolute',
    top: '15px',
    left: '15px',
    objectFit: 'cover',
    backgroundColor: '#263238',
    borderRadius: '10px',
    boxShadow: '0 0 15px 5px #151515',
  },
}))

export const LocalVideo = React.forwardRef((props, ref: ForwardedRef<HTMLVideoElement>) => {
  const classes = useStyles()
  
  return <video {...props} muted ref={ref} autoPlay className={classes.video} />
})
