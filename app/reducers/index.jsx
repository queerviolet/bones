import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';
import loginUserReducer from './login';
import cartReducer from './cart';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  rocks: rocksReducer,
  rock: rockReducer,
  cartProducts: cartReducer,
  loggedInUser: loginUserReducer
});

export default rootReducer;
