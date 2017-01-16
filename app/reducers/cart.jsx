import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const RECEIVE_CART_PRODUCTS = 'RECEIVE_CART_PRODUCTS';
export const ADD_CART_PRODUCT = 'ADD_CART_PRODUCT';
export const UPDATE_CART_PRODUCT_QUANTITY = 'RECEIVE_ROCK';
export const REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT';


// ----------------> ACTION CREATORS <----------------
export const receiveCartProducts = cartProducts => ({
  type: RECEIVE_CART_PRODUCTS,
  cartProducts
});

export const addCartProduct = (productData) => ({
  type: ADD_CART_PRODUCT,
  productData
});

export const updateCartProduct = product => ({
  type: UPDATE_CART_PRODUCT_QUANTITY,
  product
});

export const actionRemoveCartProduct = productId => ({
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

//this will update quantity to cart (adds and subtracts quantity), it will also add product to cart
export const addProductToCart = (quantity, userId, rockId) => dispatch => {
  axios.post(`/api/carts/user/${userId}/rock/${rockId}`, {rockQuantity: quantity})
    .then(res => {
      dispatch(addCartProduct(res.data));
    })
    .catch(err => {
      console.error('Unable to add the product to the cart', err);
    });
};

//removes entire product from cart
export const removeCartProduct = (userId, rockId) => dispatch => {
  axios.delete(`/user/${userId}/rock/${rockId}`)
    .then(() => dispatch(actionRemoveCartProduct(rockId)));
};


// --------------------> REDUCER <--------------------
export default function cart(state = [], action) {
  switch (action.type) {
    case RECEIVE_CART_PRODUCTS:
      return action.cartProducts;
    case ADD_CART_PRODUCT:
      return state.map(cartProduct =>
        cartProduct.id === action.product.id ? Object.assign({}, cartProduct.quantity, cartProduct.quantity + action.product.quantity) : cartProduct.quantity
      );
    case REMOVE_CART_PRODUCT:
      return state.filter(cartProduct => cartProduct.product.id !== action.productId);
    default:
      return state;
  }
}
