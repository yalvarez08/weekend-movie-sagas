import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';

function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();
    
    //upon clicking movie image, redirect user to movie details view
    const handleSelectedMovie = () => {
        dispatch({type: 'FETCH_DETAILS', payload: movie})
        history.push('/movie-details');
      }
  
    return (
      <div data-testid='movieItem' key={movie.id}>
        <h3>{movie.title}</h3>
        <img data-testid='toDetails' onClick={handleSelectedMovie} src={movie.poster} alt={movie.title}/>
      </div>
    );
  }
  
  export default MovieItem;
  