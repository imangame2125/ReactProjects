import { Wrapper, RecentWrapper, MainWrapper } from './Chatbox.styledComponent';
import Recent from './RecentComponents';
import Main from './MainComponent';
import { useEffect } from 'react';
import { getRecentChats } from './service';
import { useState } from 'react';
import ChatsContext from './context/ChatsContext';
import { useReducer } from 'react';
import { INIT_STATE, reducer } from './reducer';
import DispatchContext from './context/DispatchContext';

function Chatbox() {

  const [{ selectedChatId, selectedChatName, chats }, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(
    () => {
      getRecentChats()
        .then(chatsResponse => {
          dispatch({
            type: 'INIT_DATA_RECEIVED',
            payload: chatsResponse
          });
       
        })
    },
    []
  );

  return (
    <ChatsContext.Provider value={chats}>
      <DispatchContext.Provider value={dispatch}>
        <Wrapper>
          <RecentWrapper>
            <Recent />
          </RecentWrapper>
          {selectedChatId && <MainWrapper>
            <Main chatId={selectedChatId} name={selectedChatName} />
          </MainWrapper>}
        </Wrapper>
      </DispatchContext.Provider>
    </ChatsContext.Provider>
  )
}

export default Chatbox;