import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';
import userInfoReducer from './userInfoReducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rocks: rocksReducer,
  userInfo: userInfoReducer,
  rock: rockReducer
});

export default rootReducer;
