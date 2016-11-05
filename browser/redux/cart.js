import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> TAGS <---------------------
export const RECEIVE_CART = 'RECEIVE_CART';
export const ADDED_PRODUCT = 'ADDED_PRODUCT';
export const UPDATED_QUANTITY = 'UPDATED_QUANTITY';
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';

// ----------------> ACTION CREATORS <----------------
export const receiveCart = cartProducts => ({
    type: RECEIVE_CART,
    cartProducts
});

export const addedProduct = product => ({
    type: ADDED_PRODUCT,
    product
})

export const updatedCartProduct = updatedProduct => ({
    type: UPDATED_QUANTITY,
    updatedProduct
})

export const removingCartProduct = productId => ({
    type: REMOVE_CART_PRODUCT,
    productId
})

// --------------------> THUNKS <--------------------

export const fetchCart = (id) => dispatch => {
  // change this to cart api
    axios.get(`/api/cart-products`)
        .then(res => dispatch(receiveCart(res.data)))
        .catch(err => {
            console.error('Unable to fetch cart', err);
        });
};

export const addToCart = (id) => dispatch => {
    const body = {
        productId: id,
        quantity: 1
    }
    axios.post(`/api/cart-products`, body)
        .then(res => {
            dispatch(addedProduct(res.data));
            browserHistory.push('/cart');
        })
        .catch(err => console.error('unable to add to cart', err))
}

export const updateQuantity = (productId, newQuantity) => dispatch => {
    const body = {
        productId,
        quantity: newQuantity
    }
    axios.put(`/api/cart-products/${productId}`, body)
        .then(res => {
            console.log('res')
            dispatch(updatedCartProduct(res.data));
        })
        .catch(err => console.error('unable to update quantity', err));
}

export const removeCartProduct = (productId) => dispatch => {
    axios.delete(`/api/cart-products/${productId}`)
        .then(() => dispatch(removingCartProduct(productId)))
}

// --------------------> REDUCER <--------------------
export default function cart(state = [], action) {
  switch (action.type) {
    case RECEIVE_CART:
      return action.cartProducts;
    case ADDED_PRODUCT:
      return [...state, action.product];
    case UPDATED_QUANTITY:
      return state.map(cartProduct => 
        cartProduct.id === action.updatedProduct.id ? action.updatedProduct : cartProduct
      )
    case REMOVE_CART_PRODUCT:
     return state.filter(cartProduct => cartProduct.product.id !== action.productId);
    default:
      return state;
  }
}
