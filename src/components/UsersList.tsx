import {List, ListItem, ListItemIcon, ListItemText, ListSubheader} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

type User = {
  id: string,
  name: string
}

type UsersListProps = {
  users: User[],
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    // maxWidth: 360,
    overflow: 'auto',
    maxHeight: '300px',
    backgroundColor: theme.palette.background.paper,
  }
}));

function UsersList({users}: UsersListProps) {
  const classes = useStyles();

  return (
    <List className={classes.list} subheader={<li/>}>
      {/*<ListSubheader>Участники</ListSubheader>*/}
      {users.map((user: User) => (
        <ListItem key={user.id}>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={user.name}/>
        </ListItem>
      ))}
    </List>
  );
}

export default UsersList;