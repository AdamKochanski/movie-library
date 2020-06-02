import * as ACTIONS from '../actionTypes';

const defaultState = {
  results: [],
  selected: 0,
  totalResults: 0,
  totalPages: 0,
};

function moviesList(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_RESULTS: {
      // eslint-disable-next-line camelcase
      const { results, total_results, total_pages } = action.payload;

      return {
        ...state,
        results,
        totalResults: total_results,
        totalPages: total_pages,
      };
    }
    case ACTIONS.RESULTS_RESET:
      return {
        ...state,
        results: [],
        totalResults: 0,
        totalPages: 0,
      };

    case ACTIONS.UPDATE_SELECTED_DETAILS:
      return {
        ...state,
        selected: payload,
      };
    default:
      return state;
  }
}

export default moviesList;
