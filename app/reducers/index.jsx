import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';
import loginUserReducer from './login';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rocks: rocksReducer,
  rock: rockReducer,
  loggedInUser: loginUserReducer
});

export default rootReducer;
