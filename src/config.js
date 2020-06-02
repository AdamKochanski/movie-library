export const apiKey = 'a816a5e1b96a295b1b1cfbcf3c9c90ca';
export const apiUrl = 'https://api.themoviedb.org/3/';
export const imgUrl = 'https://image.tmdb.org/t/p/w300/';
export const lang = 'en-US';
export const includeAdult = false;

export const searchUrl = `${apiUrl}search/movie?api_key=${apiKey}&language=${lang}&include_adult=${includeAdult}&query=`;

export const genres = [
  { id: 0, name: 'OFF' },
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];
