import './App.scss';
import {Text} from './components/message'
import { useState, useEffect} from "react";
import { Button, TextField, FormControl } from '@material-ui/core';
import { ChatList } from "./components/ChatList";



function App() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (messages[messages.length - 1]?.author === "General Kenobi") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Hello there", author: "bot"},
      ]);
    }
  }, [messages]);
  const handleAddMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        text: value,
        author: "General Kenobi",
      },
    ]);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <ChatList />
      <FormControl className="formControl" >
        {messages.map((message, i) => (
          <Text key={i} text={message.text} author={message.author} />
        ))}
        <TextField 
          className="textField"
          label="Message"
          id="outlined-size-normal"
          variant="outlined"
          autoFocus="true"
          value={value} onChange={handleChange} />
        <Button 
          type="submit"
          variant="contained" 
          color="primary"
          onClick={handleAddMessage}>Add message</Button>
      </FormControl>
    </div>
  );
}

export default App;
