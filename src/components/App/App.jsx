import { Route, HashRouter as Router } from 'react-router-dom';
import MovieList from '../MovieList/MovieList';
import DetailsView from '../DetailsView/DetailsView';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <DetailsView />

        {/* Add Movie page */}
        
      </Router>
    </div>
  );
}

export default App;
