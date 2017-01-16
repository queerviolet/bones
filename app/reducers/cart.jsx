import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> Action type constant <---------------------
export const RECEIVE_CART_PRODUCTS = 'RECEIVE_CART_PRODUCTS';
export const ADD_CART_PRODUCT = 'Add_CART_PRODUCT';
export const UPDATE_CART_PRODUCT_QUANTITY = 'RECEIVE_ROCK';
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';


// ----------------> ACTION CREATORS <----------------
export const receiveCartProducts = cartProducts => ({
  type: RECEIVE_CART_PRODUCTS,
  cartProducts
});

export const addCartProduct = (quantity, product) => ({
  type: ADD_CART_PRODUCT,
  quantity,
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
export const fetchCart = id => dispatch => {
  axios.get(`/api/carts/${id}`)
    .then(res => {
      dispatch(receiveCartProducts(res.data));
    })
    .catch(err => {
      console.error('Unable to fetch the cart products', err);
    });
};

export const addProductToCart = (quantity, userId, rockId) => dispatch => {
  axios.post(`/api/cartProducts/user/${userId}/rock/${rockId}`)
    .then(res => {
      dispatch(addCartProduct(res.data));
    })
    .catch(err => {
      console.error('Unable to add the product to the cart', err);
    });
};

// --------------------> REDUCER <--------------------
export default function cart(state = [], action) {
  switch (action.type) {
    case RECEIVE_CART_PRODUCTS:
      return action.cartProducts;
    default:
      return state;
  }
}
