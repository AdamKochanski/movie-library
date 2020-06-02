import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import {
  SEARCH_UPDATE,
  GENRE_UPDATE,
  SELECTED_ID,
  SELECTED_DETAILS,
} from './actions';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import * as movieListSelector from './selectors/moviesList';

function App() {
  const [state, setState] = useState({
    s: '',
    genreId: 0,
    page: 1,
    searchMethod: '',
  });

  const dispatch = useDispatch();

  const selectedDetails = useSelector(movieListSelector.selectedDetails);
  const selectedDetailsTitle = useSelector(movieListSelector.selectedDetailsTitle);
  const searchResults = useSelector(movieListSelector.searchResults);
  const totalResults = useSelector(movieListSelector.totalResults);
  const totalPages = useSelector(movieListSelector.totalPages);

  const handleChange = (page) => {
    if (state.searchMethod === 'select') {
      dispatch(GENRE_UPDATE(state.genreId, page));
    } else if (state.searchMethod === 'input') {
      dispatch(SEARCH_UPDATE(state.s, page));
    }
    setState((prevState) => ({ ...prevState, page }));
  };

  const handleSelect = (e) => {
    const genre = e.target.value;
    dispatch(GENRE_UPDATE(genre, state.page));
    setState((prevState) => ({ ...prevState, genreId: genre, searchMethod: 'select' }));
  };

  const handleInput = (e) => {
    const s = e.target.value;
    if (e.key === 'Enter' && s.length > 2) {
      dispatch(SEARCH_UPDATE(s, state.page));
    }
    setState((prevState) => ({ ...prevState, s, searchMethod: 'input' }));
  };

  const openPopup = (id) => {
    dispatch(SELECTED_ID(id));
  };

  const closePopup = () => {
    dispatch(SELECTED_DETAILS({}));
  };

  return (
    <div className="App">
      <header>
        <h1>- Movie Library -</h1>
      </header>
      <main>
        <Search
          handleInput={handleInput}
          handleSelect={handleSelect}
          totalResults={totalResults}
          setGenre={state.genreId}
        />
        {(totalPages > 1)
          && (
            <Pagination
              count={totalPages}
              page={state.page}
              onChange={(e, page) => handleChange(page)}
              color="secondary"
            />
          )}
        <Results results={searchResults} openPopup={openPopup} />
        {(typeof selectedDetailsTitle !== 'undefined') ? <Popup selected={selectedDetails} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
