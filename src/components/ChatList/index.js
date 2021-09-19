import React, { useState } from "react";
import { List, Button, TextField } from "@material-ui/core";
import './styles.css';
import { ChatItem } from "../ChatItem";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  form: {
    marginLeft: "150px",
    position: "relative",
    left: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
    width: "200px"
  },
  input: {
    marginBottom: "10px"
  },
});
export const ChatList = ({ chats, onDeleteChat, onAddChat }) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat(value);
    setValue('');
  }

  return (
    <List className="list">
        <div>
        {chats.map((chat) => (
          <ChatItem chat={chat} key={chat.id} id={chat.id} onDelete={onDeleteChat} />
          
        ))}
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField id="outlined-multiline-flexible"
            variant="outlined"
            maxRows={4}
            label="Chat name"
            value={value}
            onChange={handleChange}
            className={classes.input}  
            type="text" 
            value={value} 
          />
          <br />
          <Button disabled={!value}  variant="contained" color="primary" component="span">
            <span >Add chat</span>
          </Button>
        </form>
    </List>
  );
};
