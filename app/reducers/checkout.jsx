import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const CHECK_OUT_CART = 'CHECK_OUT_CART';

// ----------------> ACTION CREATORS <----------------

export const checkoutCart = cart => ({
  type: CHECK_OUT_CART,
  cart
});

// --------------------> THUNKS <--------------------
export const checkoutOrderCart = userId => dispatch => {
  axios.put(`/api/orders/${userId}`)
  .then(res => {
    dispatch(checkoutCart(res.data));
  })
  .catch(err => console.err('Unable to update shopping cart', err));
};

// --------------------> REDUCER <--------------------

export default function checkout(state={}, action) {
  switch(action.type) {
    case CHECK_OUT_CART:
      return action.cart;
    default:
      return state;

  }
}