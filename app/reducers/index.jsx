import { combineReducers } from 'redux'
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./productsReducer').default,
  categories: require('./categoryReducer').default,
  cart: cartReducer,
  currentProduct: require('./currentProductReducer').default,
  selectedProducts: require('./selectedProductsReducer').default
});

export default rootReducer;