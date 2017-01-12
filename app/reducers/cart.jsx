import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> Action type constant <---------------------
export const RECEIVE_CART_PRODUCTS = 'RECEIVE_CART_PRODUCTS';
export const Add_CART_PRODUCT = 'Add_CART_PRODUCT';
export const UPDATE_CART_PRODUCT_QUANTITY = 'RECEIVE_ROCK';
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';


// ----------------> ACTION CREATORS <----------------
export const receiveCartProducts = cartProducts => ({
  type: RECEIVE_CART_PRODUCTS,
  cartProducts
});

export const addCartProduct = product => ({
  type: ADD_CART_PRODUCT,
  product
});

export const updateCartProduct = product => ({
  type: UPDATE_CART_PRODUCT_QUANTITY,
  product
});

export const removeCartProduct = productId => ({
  type: REMOVE_CART_PRODUCT,
  productId
});

// --------------------> THUNKS <--------------------
export const fetchCart = (id) => dispatch => {
  axios.get(`/api/orders/${id}`)
    .then(res => {
      dispatch(receiveCartProduct(res.data));
    })
    .catch(err => {
      console.error('Unable to fetch the specific rock', err);
    });
};

// --------------------> REDUCER <--------------------
export default function rock(state = {}, action) {
  switch(action.type) {
    case RECEIVE_A_ROCK:
      return action.rock
    default:
      return state;
  }
}
