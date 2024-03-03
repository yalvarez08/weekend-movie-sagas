import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import DetailsView from '../DetailsView/DetailsView';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path='/movie-details'>
          <DetailsView />
        </Route>
        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
