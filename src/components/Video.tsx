import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  video: {
    width: '100%',
    objectFit: 'cover',
    backgroundColor: '#263238',
    borderRadius: '10px',
  }
}));

type VideoProps = {
  children?: React.ReactNode,
}

function Video(props: VideoProps & { ref: React.ForwardedRef<HTMLVideoElement> }) {
  const Video = React.forwardRef<HTMLVideoElement, VideoProps>(({children, ...otherProps}, ref) => {
    const classes = useStyles();

    return (
      <video ref={ref} {...otherProps} autoPlay className={classes.video}>
        {children}
      </video>
    );
  });

  return <Video {...props} />
}

export default Video;