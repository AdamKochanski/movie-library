import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { apiUrl, apiKey, searchUrl } from './config';

export const RESULTS = (payload) => ({
  type: ACTIONS.UPDATE_RESULTS,
  payload,
});

export const RESULTS_RESET = (payload) => ({
  type: ACTIONS.RESULTS_RESET,
  payload,
});

export const SELECTED_DETAILS = (payload) => ({
  type: ACTIONS.UPDATE_SELECTED_DETAILS,
  payload,
});

export const SELECTED_ID = (payload) => (dispatch) => {
  axios(`${apiUrl}movie/${payload}?api_key=${apiKey}`).then(({ data }) => {
    dispatch(SELECTED_DETAILS(data));
  });
};

export const SEARCH_UPDATE = (s, page) => (dispatch) => {
  axios(`${searchUrl + s}&page=${page}`).then(({ data }) => {
    dispatch(RESULTS(data));
  });
};

export const GENRE_UPDATE = (genreId, page) => (dispatch) => {
  if (genreId !== 0) {
    axios(`${apiUrl}discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genreId}`)
      .then(({ data }) => {
        dispatch(RESULTS(data));
      });
  } else {
    dispatch(RESULTS_RESET([]));
  }
};
