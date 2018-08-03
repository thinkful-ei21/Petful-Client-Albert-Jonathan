import {
  FETCH_DOG_SUCCESS,
  FETCH_DOG_REQUEST,
  FETCH_DOG_ERROR
} from '../actions/dog-actions'

const initialState = {
  data: null,
  error: null,
  loading: false
};

const dogReducer = (state=initialState, action) => {
  if (action.type === FETCH_DOG_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  if (action.type === FETCH_DOG_SUCCESS) {
    return {
      ...state,
      data: action.data,
      error: null,
      loading: false
    }
  }
  if (action.type === FETCH_DOG_ERROR) {
    return {
      ...state,
      error: action.error,
      loading: false
    }
  }
  return state;
};

export default dogReducer;