import { Grid, Typography } from '@material-ui/core'

type ChatMessageProps = {
  name: string
  text: string
  time: string
}

function ChatMessage({ name, text, time }: ChatMessageProps) {
  return (
    <Grid item container direction={'column'}>
      <Grid item container direction={'row'} justify={'space-between'}>
        <Typography variant={'subtitle2'}>{name}</Typography>
        <Typography variant={'caption'}>{time}</Typography>
      </Grid>

      <Grid item>{text}</Grid>
    </Grid>
  )
}

export default ChatMessage
