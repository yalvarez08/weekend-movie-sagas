import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch } from 'react-redux';
import './MovieItem.css';

function MovieItem({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();
    
    //upon clicking movie image, redirect user to movie details view
    const handleSelectedMovie = () => {
        dispatch({type: 'FETCH_DETAILS', payload: movie})
        history.push('/movie-details');
      }
  
    return (
      <>
      <div className="container">
        <div data-testid='movieItem' className="gallery" key={movie.id}>
          <h3 className="film-title">{movie.title}</h3>
          <img data-testid='toDetails' id="film-image" onClick={handleSelectedMovie} src={movie.poster} alt={movie.title}/>
        </div>
      </div>
      </>
    );
  }
  
  export default MovieItem;
  