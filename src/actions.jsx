import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { apiUrl, apiKay } from './config';

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
