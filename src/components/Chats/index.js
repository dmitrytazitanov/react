import { useState, useEffect, useCallback, useMemo } from "react";
import {
  useParams,
  useHistory,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Message } from "../Message";
import { AUTHORS } from "../../utils/constants";
import { Form } from "../Form";
import { ChatList } from "../ChatList";
import { addChat, deleteChat } from "../../store/chats/actions";
import {  addMessageWithReplay } from "../../store/messages/actions";
import { selectChats, selectIfChatExists } from "../../store/chats/selectors";
import { selectMessages } from "../../store/messages/selectors";


const initialChats = [
  { name: "Ivan Ivanov", id: "chat-1" },
  { name: "Sergej Sergeev", id: "chat-2" },
];

const initialMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = [];

  return acc;
}, {});



function Chats(props) {
  const { chatId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();


  const messages = useSelector(selectMessages);
  const chats = useSelector(selectChats);

  const selectChatExists = useMemo(() => selectIfChatExists(chatId), [chatId]);

  const chatExists = useSelector(selectChatExists);

  const sendMessage = useCallback(
    (text, author) => {
      dispatch(addMessageWithReplay(chatId, text, author));
    },
    [chatId]
  );

  

  const handleAddMessage = useCallback(
    (text) => {
      sendMessage(text, AUTHORS.HUMAN);
    },
    [sendMessage]
  );

  const handleAddChat = useCallback(
    (name) => {
      dispatch(addChat(name));
    },
    [dispatch]
  );

  const handleDeleteChat = useCallback(
    (id) => {
      dispatch(deleteChat(id));

      if (chatId !== id) {
        return;
      }

      if (chats.length === 1) {
        history.push(`/chats/${chats[0].id}`);
      } else {
        history.push(`/chats`);
      }
    },
    [chatId, dispatch, chats, history]
  );


  return (
    <div className="App">
      <ChatList
        chats={chats}
        onAddChat={handleAddChat}
        onDeleteChat={handleDeleteChat}
      />
      {!!chatId && chatExists && (
        <>
          {(messages[chatId] || []).map((message) => (
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
