import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { apiUrl, apiKey, searchUrl } from './config';

export const resultsUpdate = (payload) => ({
  type: ACTIONS.UPDATE_RESULTS,
  payload,
});

export const resultsReset = (payload) => ({
  type: ACTIONS.RESULTS_RESET,
  payload,
});

export const selectDetails = (payload) => ({
  type: ACTIONS.UPDATE_SELECTED_DETAILS,
  payload,
});

export const selectID = (payload) => (dispatch) => {
  axios(`${apiUrl}movie/${payload}?api_key=${apiKey}`).then(({ data }) => {
    dispatch(selectDetails(data));
  });
};

export const searchUpdate = (s, page) => (dispatch) => {
  axios(`${searchUrl + s}&page=${page}`).then(({ data }) => {
    dispatch(resultsUpdate(data));
  });
};

export const genreUpdate = (genreId, page) => (dispatch) => {
  if (genreId !== 0) {
    axios(`${apiUrl}discover/movie?api_key=${apiKey}&page=${page}&with_genres=${genreId}`)
      .then(({ data }) => {
        dispatch(resultsUpdate(data));
      });
  } else {
    dispatch(resultsReset([]));
  }
};
