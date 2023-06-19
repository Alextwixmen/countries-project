export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LOADING = '@@country/SET_LOADING';
export const SET_ERROR = '@@country/SET_ERROR';

export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});

export const setLoadiong = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

// 3 параметр - объект с двумя полями из index.js client и api, который передаем через  applyMiddleware(thunk.withExtraArgument({ client: axios, api: api }))

export const loadCountries =
  () =>
  (dispatch, getState, { client, api }) => {
    dispatch(setLoadiong());
    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((err) => dispatch(setError(err)));
  };
