import { Header, Icon, InnerMessage, Input, InputBox, Message, MessagesContainer, MessagesWrapper, Text, Wrapper } from "./Main.styledComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEllipsisVertical, faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { getMessages } from "../service";
import { useContext } from "react";
import DispatchContext from "../context/DispatchContext";


function Main({ name, chatId }) {
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);
  const dispatch = useContext(DispatchContext);

  useEffect(
    () => {
      getMessages(chatId)
      .then(response => {
        setMessages(response);
      })
    },
    [chatId]
  );

  function handleChange(e) {
    setMessage(e.target.value);
    if (e.target.value !== '') {
      setIsTyping(true);
    }
    else {
      setIsTyping(false);
    }
  }

  function handleClose() {
    dispatch({
      type: 'CLOSE_CHAT'
    });
  }

  return (
    <Wrapper>
      <Header>
        <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
        <Text>{name}</Text>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </Header>
      <MessagesWrapper>
        <MessagesContainer>
          {messages.map(message => (
            <Message isMe={message.isMe} key={message.id}>
              <InnerMessage isMe={message.isMe}>
                {message.text}
              </InnerMessage>
            </Message>
          ))}
        </MessagesContainer>
      </MessagesWrapper>
      <InputBox>
        <Input value={message} onChange={handleChange} />
        <Icon icon={isTyping ? faPaperPlane : faPaperclip} size='sm' />
      </InputBox>
    </Wrapper>
  )
}

export default Main;