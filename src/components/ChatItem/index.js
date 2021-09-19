import React from "react";
import { Link } from "react-router-dom";
import { ListItem } from "@material-ui/core";
import { useSelector } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    }
  }));

export const ChatItem = ({ chat, onDelete, id }) => {
    const classes = useStyles();
    const showName = useSelector((state) => state.showName);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <ListItem className="listItem" key={chat.id}>
        <Link className="listItem__link" to={`/chats/${chat.id}`}>{chat.name}</Link>
        <IconButton onClick={handleDelete} aria-label="delete" className={classes.margin}>
        <DeleteIcon fontSize="large" />
        </IconButton>
    </ListItem>
    
    
  );
};