import { combineReducers } from 'redux';
import rocksReducer from './rocks';
import rockReducer from './rock';
import userInfoReducer from './userInfoReducer';
import cartReducer from './cart';
import authReducer from './auth';
import adminReducer from './admin';

const rootReducer = combineReducers({
  auth: authReducer,
  rocks: rocksReducer,
  userInfo: userInfoReducer,
  rock: rockReducer,
  cartProducts: cartReducer,
  users: adminReducer
});

export default rootReducer;
