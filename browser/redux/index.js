import { combineReducers } from 'redux';
import products from './products'
import currentProduct from './product'
import cartProducts from './cart'

export default combineReducers({
  products,
  currentProduct,
  cartProducts
});
