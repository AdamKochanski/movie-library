import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { apiUrl, apiKay, searchUrl } from './config';

export const RESULTS = (payload) => ({
  type: ACTIONS.UPDATE_RESULTS,
  payload,
});

export const TOTAL_RESULTS = (payload) => ({
  type: ACTIONS.UPDATE_TOTAL_RESULTS,
  payload,
});

export const TOTAL_PAGES = (payload) => ({
  type: ACTIONS.UPDATE_TOTAL_PAGES,
  payload,
});

export const SELECTED_DETAILS = (payload) => ({
  type: ACTIONS.UPDATE_SELECTED_DETAILS,
  payload,
});

export const SELECTED_ID = (payload) => (dispatch) => {
  axios(`${apiUrl}movie/${payload}?api_key=${apiKay}`).then(({ data }) => {
    dispatch(SELECTED_DETAILS(data));
  });
};

export const SEARCH_UPDATE = (s, page) => (dispatch) => {
  axios(`${searchUrl + s}&page=${page}`).then(({ data }) => {
    dispatch(RESULTS(data.results));
    dispatch(TOTAL_RESULTS(data.total_results));
    dispatch(TOTAL_PAGES(data.total_pages));
  });
};

export const GENRE_UPDATE = (genreId, page) => (dispatch) => {
  if (genreId !== 0) {
    axios(`${apiUrl}discover/movie?api_key=${apiKay}&page=${page}&with_genres=${genreId}`).then(({ data }) => {
      dispatch(RESULTS(data.results));
      dispatch(TOTAL_RESULTS(data.total_results));
      dispatch(TOTAL_PAGES(data.total_pages));
    });
  } else {
    dispatch(RESULTS([]));
    dispatch(TOTAL_RESULTS(0));
    dispatch(TOTAL_PAGES(0));
  }
};
