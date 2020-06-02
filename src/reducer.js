import * as ACTIONS from './actionTypes';

const defaultState = {
  results: [],
  selected: 0,
  totalResults: 0,
  totalPages: 0,
};
function reducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.UPDATE_RESULTS:
      return {
        ...state,
        results: payload.results,
        totalResults: payload.total_results,
        totalPages: payload.total_pages,
      };
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

export default reducer;
