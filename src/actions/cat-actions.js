import API_BASE_URL from '../config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = data => ({
  type: FETCH_CAT_SUCCESS,
  data
});

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
});

export const fetchCat = () => dispatch => {
  console.log('ho');
  // dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/cats/`, {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
      dispatch(fetchCatSuccess(data));
    })
    .catch(err => dispatch(fetchCatError(err)));
};

export const adoptCat = () => dispatch => {
  fetch(`${API_BASE_URL}/cats/`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(fetchCat());
    })
    .catch(err => console.error(err)); // later change to dispatch error
};
