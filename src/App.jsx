import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Pagination } from '@material-ui/lab';
import {
  RESULTS,
  TOTAL_RESULTS,
  TOTAL_PAGES,
  SELECTED_ID,
  SELECTED_DETAILS,
} from './actions';

import { searchUrl } from './config';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const [state, setState] = useState({
    s: '',
    genreId: 0,
    page: 1,
  });

  const dispatch = useDispatch();

  const selectedDetails = useSelector((store) => store.selected);
  const selectedDetailsTitle = useSelector((store) => store.selected.title);
  const searchResults = useSelector((store) => store.results);
  const totalResults = useSelector((store) => store.totalResults);
  const totalPages = useSelector((store) => store.totalPages);

  const search = (e, pageUpdate) => {
    if (!pageUpdate) {
      setState((prevState) => ({ ...prevState, page: 1 }));
    }
    if ((e && e.key === 'Enter') || pageUpdate) {
      axios(`${searchUrl + state.s}&page=${state.page}`).then(({ data }) => {
        const results = state.genreId
          ? data.results.filter((result) => result.genre_ids.indexOf(+state.genreId) > -1)
          : data.results;
        dispatch(RESULTS(results));
        dispatch(TOTAL_RESULTS(data.total_results));
        dispatch(TOTAL_PAGES(data.total_pages));
      });
    }
  };

  const switchPage = () => {
    if (state.totalPages > 0) { search(undefined, true); }
  };

  const handleChange = (page) => {
    setState((prevState) => ({ ...prevState, page }));
  };

  const handleSelect = (e) => {
    const genre = e.target.value;
    setState((prevState) => ({ ...prevState, genreId: genre }));
  };

  const handleInput = (e) => {
    const s = e.target.value;
    setState((prevState) => ({ ...prevState, s }));
  };

  const openPopup = (id) => {
    dispatch(SELECTED_ID(id));
  };

  const closePopup = () => {
    dispatch(SELECTED_DETAILS({}));
  };

  useEffect(switchPage, [state.page]);

  return (
    <div className="App">
      <header>
        <h1>- Movie Library -</h1>
      </header>
      <main>
        <Search
          handleInput={handleInput}
          handleSelect={handleSelect}
          search={search}
          totalResults={totalResults}
        />
        {(state.totalPages > 1)
          ? (
            <Pagination
              count={totalPages}
              page={state.page}
              onChange={(e, page) => handleChange(page)}
              color="secondary"
            />
          )
          : false}
        <Results results={searchResults} openPopup={openPopup} />
        {(typeof selectedDetailsTitle !== 'undefined') ? <Popup selected={selectedDetails} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
