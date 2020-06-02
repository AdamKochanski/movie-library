import { getMovieList } from './rootSelectors';

export const selectedDetails = (store) => getMovieList(store).selected;
export const selectedDetailsTitle = (store) => getMovieList(store).selected.title;
export const searchResults = (store) => getMovieList(store).results;
export const totalResults = (store) => getMovieList(store).totalResults;
export const totalPages = (store) => getMovieList(store).totalPages;
