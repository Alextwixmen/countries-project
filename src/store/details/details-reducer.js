import {
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  CLEAR_DETAILS,
} from './details-actions';
const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
};

export const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        error: null,
        starus: 'loading',
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
        starus: 'rejected',
      };
    case SET_COUNTRY:
      return {
        ...state,
        starus: 'receiver',
        currentCountry: payload,
      };
    case CLEAR_DETAILS:
      return initialState;
    default:
      return state;
  }
};
