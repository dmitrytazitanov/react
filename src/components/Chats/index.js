import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Message } from "../Message";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { Button } from "../Button";

const initialMessages = {
  "chat-1": [],
  "chat-2": [],
};

const initialChats = [
  { name: "Ivan Ivanov", id: "chat-1" },
  { name: "Sergej Sergeev", id: "chat-2" },
];

function Chats(props) {
  console.log(props);
  const { chatId } = useParams();


  const [messages, setMessages] = useState(initialMessages);
  const [chats, setChats] = useState(initialChats);

  const sendMessage = useCallback(
    (message) => {
      setMessages((prevMess) => ({
        ...prevMess,
        [chatId]: [...prevMess[chatId], message],
      }));
    },
    [chatId]
  );

  useEffect(() => {
    let timeout;
    const curMess = messages[chatId];

    if (!!chatId && curMess?.[curMess.length - 1]?.author === AUTHORS.HUMAN) {
      timeout = setTimeout(() => {
        sendMessage({
          text: "I am bot",
          author: AUTHORS.bot,
          id: `mess-${Date.now()}`,
        });
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [messages]);

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage({
        text,
        author: AUTHORS.HUMAN,
        id: `mess-${Date.now()}`,
      });
    },
    [chatId, sendMessage]
  );

  return (
    <div className="App">
      <ChatList chats={chats} onAddChat />
      {!!chatId && (
        <>
          {messages[chatId].map((message) => (
            <Message key={message.id} text={message.text} id={message.id} />
          ))}
          <Form onSubmit={handleAddMessage}>
          </Form>
        </>
      )}
    </div>
  );
}

export default Chats;
