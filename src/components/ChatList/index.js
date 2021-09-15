import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import './styles.css';
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  }
}));
export const ChatList = ({ chats }) => {
  const classes = useStyles();
  return (
    <List className="list">
      <div>
      {chats.map((chat) => (
        <ListItem className="listItem" key={chat.id}>
          <Link className="listItem__link" to={`/chats/${chat.id}`}>{chat.name}</Link>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </ListItem>
      ))}
      </div>
      <Button className="listButton" variant="contained" color="primary" component="span">
        <span >Add chat</span>
      </Button>
    </List>
  );
};
