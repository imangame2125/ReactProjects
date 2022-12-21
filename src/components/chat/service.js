function apiCall(value) {
  return new Promise(resolve => {
    setTimeout(
      () => {
        resolve(value);
      }, 
      500
    )
  });
}

export function getRecentChats() {
  return apiCall(
    [
      {
        id: '1',
        name: 'Iman',
        lastMessage: {
          date: '18:30',
          text: 'My last message'
        },
        avatar: '',
        unreadMessageCount: 5
      },
      {
        id: '2',
        name: 'Reza',
        lastMessage: {
          date: '17:30',
          text: 'My last message'
        },
        avatar: '',
        unreadMessageCount: 2
      },
    ]
  )
}

export function getMessages(chatId) {
  return apiCall(
    [
      {
        id: '1',
        text: 'Hello',
        date: '04:10',
        isMe: false
      },
      {
        id: '2',
        text: 'Hi',
        date: '04:11',
        isMe: true
      },
    ]
  )
}