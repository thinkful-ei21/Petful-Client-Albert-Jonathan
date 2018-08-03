import {
  FETCH_CAT_SUCCESS,
  FETCH_CAT_REQUEST,
  FETCH_CAT_ERROR
} from '../actions/cat-actions'

const initialState = {
  data: null,
  error: null,
  loading: false
};

const catReducer = (state=initialState, action) => {
  if (action.type === FETCH_CAT_REQUEST) {
    return {
      ...state,
      loading: true
    }
  }
  if (action.type === FETCH_CAT_SUCCESS) {
    return {
      ...state,
      data: action.data,
      error: null,
      loading: false
    }
  }
  if (action.type === FETCH_CAT_ERROR) {
    return {
      ...state,
      error: action.error,
      loading: false
    }
  }
  return state;
};

export default catReducer;