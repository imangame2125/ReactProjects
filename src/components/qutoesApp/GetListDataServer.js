const DATA = [
  { name: 'Dalai Lama', id: 1, quotes: "The purpose of our lives is to be happy." },
  { name: 'John Lennon', id: 2, quotes: "Life is what happens when you're busy making other plans." },
  { name: 'Stephen King', id: 3, quotes: "Get busy living or get busy dying." },
  { name: 'Mae West', id: 4, quotes: "You only live once, but if you do it right, once is enough." },
  { name: 'Albert Einstein', id: 5, quotes: "The purpose of our lives is to be happy." },
  { name: 'Will Smith', id: 6, quotes: "Money and success don’t change people; they merely amplify what is already there." },
  { name: 'Socrates', id: 7, quotes: "Turn your wounds into wisdom." },
  { name: 'Anais Nin', id: 8, quotes: "The greatest pleasure of life is love." },
  { name: 'Euripides', id: 9, quotes: "The greatest pleasure of life is love." },
  { name: 'Kate Winslet ', id: 10, quotes: "Every moment is a fresh beginning." },
]
export default function GetList() {
  return (
    new Promise(resolve => {
      setTimeout(() => {
        resolve(DATA.map((item) => {
          return {
            name: item.name,
            id: item.id
          }
        }))
      }, 1000)
    })
  )
}

export function getItem(id) {
  return (
    new Promise(resolve => {
      const item = DATA.find((item) => item.id === id)
      setTimeout(() => {
        resolve(item)
      }, 1000)
    })
  )
}