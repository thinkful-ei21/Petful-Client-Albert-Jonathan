import API_BASE_URL from '../config';

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = data => ({
  type: FETCH_DOG_SUCCESS,
  data
});

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = error => ({
  type: FETCH_DOG_ERROR,
  error
});

export const fetchDog = () => dispatch => {
  // dispatch fetchdog request
  fetch(`${API_BASE_URL}/dogs/`, {
    method: 'GET'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(data => dispatch(fetchDogSuccess(data)))
    .catch(err => console.error(err)); // later change to dispatch error
};

export const adoptDog = () => dispatch => {
  fetch(`${API_BASE_URL}/dogs/`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(fetchDog());
    })
    .catch(err => console.error(err)); // later change to dispatch error
};
