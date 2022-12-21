import { useContext } from "react";
import ChatsContext from "../context/ChatsContext";
import DispatchContext from "../context/DispatchContext";
import { Avatar, Chat, ChatDetailWrapper, Text, Wrapper } from "./Chats.styledComponents";



function Chats() {
  const list = useContext(ChatsContext);
  const dispatch = useContext(DispatchContext);


  function handleClick(chatId, name) {
    dispatch({
      type: 'CHAT_SELECTED',
      payload: {
        chatId,
        name
      }
    })
  }

  return (
    <Wrapper>
      {list.map(chat => (
        <Chat key={chat.id} onClick={() => handleClick(chat.id, chat.name)}>
          <Avatar />
          <ChatDetailWrapper>
            <Text>
              {chat.name}
            </Text>
            <Text>
              {chat.lastMessage.text}
            </Text>
          </ChatDetailWrapper>
          <ChatDetailWrapper>
            <Text>
              {chat.unreadMessageCount}
            </Text>
            <Text>
              {chat.lastMessage.date}
            </Text>
          </ChatDetailWrapper>
        </Chat>
      ))}
    </Wrapper>
  )
}

export default Chats;