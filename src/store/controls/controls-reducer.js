import { SET_REGION, SET_SEARCH, CLEAR_FILTERS } from './controls-actions';

const initialState = {
  search: '',
  region: '',
};

export const controlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        region: '',
        search: '',
      };
    default:
      return state;
  }
};
