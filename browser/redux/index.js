import { combineReducers } from 'redux';
import products from './products'
import currentProduct from './product'
import cartProducts from './cart'
import order from './order'

export default combineReducers({
  products,
  currentProduct,
  cartProducts,
  order
});
