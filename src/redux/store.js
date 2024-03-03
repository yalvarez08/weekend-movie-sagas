import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
 

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_DETAILS', fetchMovieDetails);
  yield takeEvery('FETCH_GENRES', fetchGenres);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

//GET details for selected movie
function* fetchMovieDetails(action) {
  try {
    const detailResponse = yield axios.get(`/api/movies/${action.payload.id}`)
    yield put({type: 'SET_MOVIEDETAILS', payload: detailResponse.data});
  } catch (error) {
      console.log('fetchMovieDetails error:', error);
  }
}

//GET all genres from database
function* fetchGenres() {
  try {
    const genres = yield axios.get('/api/genres');
    console.log('get all genres:', genres.data);
    yield put({ type: 'SET_GENRES', payload: genres.data })
  } catch (error) {
    console.log('fetchGenres error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

// Used to store details of selected movie
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIEDETAILS':
      return action.payload;
    default:
      return state;
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    movieDetails,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
