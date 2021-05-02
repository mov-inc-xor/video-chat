import React, { ForwardedRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundColor: '#263238',
    margin: 'auto',
  },
}))

export const FullSizeVideo = React.forwardRef((props, ref: ForwardedRef<HTMLVideoElement>) => {
  const classes = useStyles()
  
  return <video {...props} ref={ref} autoPlay className={classes.video} />
})
