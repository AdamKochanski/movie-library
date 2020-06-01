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
        results: payload,
      };
    case ACTIONS.UPDATE_TOTAL_RESULTS:
      return {
        ...state,
        totalResults: payload,
      };
    case ACTIONS.UPDATE_TOTAL_PAGES:
      return {
        ...state,
        totalPages: payload,
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
