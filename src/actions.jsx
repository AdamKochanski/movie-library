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

export const SEARCH_UPDATE = (s, page, genreId) => (dispatch) => {
  axios(`${searchUrl + s}&page=${page}`).then(({ data }) => {
    const results = genreId
      ? data.results.filter((result) => result.genre_ids.indexOf(+genreId) > -1)
      : data.results;
    dispatch(RESULTS(results));
    dispatch(TOTAL_RESULTS(data.total_results));
    dispatch(TOTAL_PAGES(data.total_pages));
  });
};
