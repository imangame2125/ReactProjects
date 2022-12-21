const PERSON = [
  { id: 1, name: 'Iman', age: 29, city: 'Tehran', height: 185 },
  { id: 2, name: 'Ali', age: 40, city: 'Arak', height: 175 },
  { id: 3, name: 'Sahar', age: 32, city: 'Gorgan', height: 168 },
  { id: 4, name: 'Nader', age: 24, city: 'Lorestan', height: 171 },
  { id: 5, name: 'Sina', age: 55, city: 'Kashan', height: 169 },
  { id: 6, name: 'Maryam', age: 18, city: 'Kish', height: 182 },
  { id: 7, name: 'Shayan', age: 26, city: 'Esfahan', height: 190 },
  { id: 8, name: 'Shiva', age: 48, city: 'Shiraz', height: 195 },
  { id: 9, name: 'Pedram', age: 39, city: 'Kerman', height: 160 },
  { id: 10, name: 'Paria', age: 41, city: 'Kordestan', height: 178 },
  { id: 11, name: 'Sara', age: 23, city: 'Karaj', height: 174 },
]

export default function GetDataPerson() {
  return (
    new Promise(resolve => {
      setTimeout(() => {
        resolve(PERSON)
      }, 1000)
    })
  )
}