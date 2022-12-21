const MOVIES = [
  { name: 'Enferadi', id: 1, rate: 8, filmStyle: 'comedy', details: [{ starActor: 'Reza Attaran', director: 'Tabatabaie' }] },
  { name: 'Laminor', id: 2, rate: 8.5, filmStyle: 'social', details: [{ starActor: 'Ali Nasirian', director: 'Mehrjooie' }] },
  { name: 'khoob bad jelf', id: 3, rate: 8, filmStyle: 'horror', details: [{ starActor: 'Saman Derakhshani', director: 'Rezaie' }] },
  { name: 'Dinamit', id: 4, rate: 7.5, filmStyle: 'Fiction', details: [{ starActor: 'Ali Sadeghi', director: 'Rasooli' }] },
  { name: 'Shish va Besh', id: 5, rate: 7, filmStyle: 'Political', details: [{ starActor: 'Reza Golzar', director: 'Mehran Modiri' }] },
  { name: 'Darbareye Eli', id: 6, rate: 9, filmStyle: 'Economic', details: [{ starActor: 'Elnaz ShakerDoost', director: 'Javad Razavian' }] },
  { name: 'Marmoolak', id: 7, rate: 9.5, filmStyle: 'Cultural', details: [{ starActor: 'Reza Attaran', director: 'Masoodi' }] },
  { name: 'Jodaie Nader az Simin', id: 10, rate: 7.5, filmStyle: 'International', details: [{ starActor: 'Reza Attaran', director: 'Asghari' }] },
]

export default function getMovies() {
  return (
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOVIES)
      }, 1000);
    })
  )
}