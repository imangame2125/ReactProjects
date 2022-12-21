import { useEffect, useMemo, useReducer, useState } from "react";
import Movie from "./Movie";
import MovieList from "./MovieList";
import getMovies from "./service";


const reducer = (state, action) => {

  switch (action.type) {
    case 'GET-DATA-MOVIES':
      return {
        ...state,
        movies: action.payload
      }
    case 'SELECTED-MOVIE':
      return {
        ...state,
        selectedMovieId: action.payload
      }
    case 'SELECTED-MOVIE-SHOW-BEST-MOVIE':
      return {
        ...state,
        selectedMovieId: null,
        showBestMovie: false
      }
    case 'SHOW-BEST-MOVIE':
      return {
        ...state,
        showBestMovie: true
      }
  }
  return state
}


const initialValue = {
  movies: [],
  selectedMovieId: null,
  showBestMovie: false
}



export default function App() {
  
  const [{ movies, selectedMovieId, showBestMovie }, dispatch] = useReducer(reducer, initialValue)



  useEffect(
    () => {
      getMovies()
        .then(movies => {
          dispatch({
            type: 'GET-DATA-MOVIES',
            payload: movies
          })
        
        });
    },
    []
  );

  function handleMovieClick(id) {
    dispatch({
      type: 'SELECTED-MOVIE',
      payload: id
    })
   
  }

  function handleBackClick() {
    dispatch({
      type: 'SELECTED-MOVIE-SHOW-BEST-MOVIE'

    })
   
  }

  function handleShowBestMovie() {
    dispatch({
      type: 'SHOW-BEST-MOVIE'
    })
  
  }

  let maxRate = -1;
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    if (movie.rate > maxRate) {
      maxRate = movie.rate
    }
  }

  const bestMovie = useMemo(
    () => {
      return movies.find(item => item.rate === maxRate);
    },
    [movies, maxRate]
  );
  const selectedMovie = movies.find(item => item.id === selectedMovieId);

  return (

    <div>
      {selectedMovie ? (
        <Movie
          movie={selectedMovie}
          onBackClick={handleBackClick}
        />
      ) : (

        <MovieList movies={movies} onClick={handleMovieClick} />
      )}

      {!selectedMovie && <button onClick={handleShowBestMovie}>Show best movie</button>}
      {!selectedMovie && showBestMovie && (
        <div>
          <h1>Best film</h1>
          <Movie movie={bestMovie} />
        </div>
      )}
    </div>
  )
}