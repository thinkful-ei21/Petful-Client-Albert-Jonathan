import { createStore, combineReducers, applyMiddleware } from 'redux';
import catReducer from './reducers/cat-reducer';
import dogReducer from './reducers/dog-reducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({
  catReducer,
  dogReducer
}), applyMiddleware(thunk));

export default store;
