import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> TAGS <---------------------
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const CREATED_ORDER = 'CREATED_ORDER';

// ----------------> ACTION CREATORS <----------------
export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

export const createdOrder = order => ({
  type: CREATED_ORDER,
  order
});

// --------------------> THUNKS <--------------------

export const fetchOrder = (id) => dispatch => {
  axios.get(`/api/orders/${id}`)
    .then(res => dispatch(receiveOrder(res.data)))
    .catch(err => console.error('Unable to fetch order', err));
};

export const addOrder = ({ shipping_address, billing_address, credit_card }) => (dispatch, getState) => {
  // If cart is empty, do not create order and redirect to /cart
  if (!getState().cartProducts.length) {
    console.error('Cannot checkout with an empty cart')
    return browserHistory.push(`cart`);
  }
  axios.post(`/api/orders`, { shipping_address, billing_address, credit_card })
    .then(res => {
      dispatch(createdOrder(res.data))
      browserHistory.push(`/confirmation/${res.data.id}`);
    })
    .catch(err => console.error('Unable to create order', err));
};

// --------------------> REDUCER <--------------------
export default function order(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
    case CREATED_ORDER:
      return action.order;
    default:
      return state;
  }
}
