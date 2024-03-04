import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  
// on page load, fetch and render all movies from database
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);


  return (
    <main>
      <h1>Movie List</h1>
      <div className="movies">
        {movies.map(movie => {
          return (
            <div key={movie.id}>
              <MovieItem movie={movie} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default MovieList;
