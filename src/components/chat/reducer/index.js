
export const INIT_STATE = {
  selectedChatId: null,
  selectedChatName: null,
  chats: []
};

export function reducer(state, action) {
  switch (action.type) {
    case 'INIT_DATA_RECEIVED':
      return {
        ...state,
        chats: action.payload
      };
    case 'CHAT_SELECTED':
      return {
        ...state,
        selectedChatId: action.payload.chatId,
        selectedChatName: action.payload.name
      }

    case 'CLOSE_CHAT':
      return {
        ...state,
        selectedChatId: null,
        selectedChatName: null
      }
    default:
      return state;
  }
}