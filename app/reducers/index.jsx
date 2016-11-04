import { combineReducers } from 'redux'
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./productReducer').default,
  categories: require('./categoryReducer').default,
  cart: cartReducer
});

export default rootReducer;
