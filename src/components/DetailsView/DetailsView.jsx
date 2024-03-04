import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailsView() {

  const history = useHistory();
  const movieDetails = useSelector(store => store.movieDetails);
  const genres = movieDetails.map(movie => movie.name);

  const renderDetails = () => {
    if (movieDetails.length > 0) {
        return(
            <>
            <h4>{movieDetails[0].title}</h4>
            <img src={movieDetails[0].poster} alt={movieDetails[0].title} />
            <h3>{movieDetails[0].description}</h3>
        <h3>Genres:</h3>
        <ul>
            {genres.map(genre => <li key={genre.id}>{genre}</li>)}
        </ul>
            </>
        )} else {
            return <h2>Sorry, no details at this time. Try again later.</h2>;
        }
    }
  
  return (
   <>
    <div data-testid="movieDetails">
        {renderDetails()}
        
        <button data-testid="toList" id="back-btn" onClick={() => history.push('/')}>Back to movie list</button>
    </div>
    </>
  );
}

export default DetailsView;
