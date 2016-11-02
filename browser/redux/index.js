import { combineReducers } from 'redux';
import products from './products'
import currentProduct from './product'

export default combineReducers({
  products,
  currentProduct
});
