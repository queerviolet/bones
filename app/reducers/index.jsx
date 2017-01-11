import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rocks: rocksReducer,
  rock: rockReducer
});

export default rootReducer;
