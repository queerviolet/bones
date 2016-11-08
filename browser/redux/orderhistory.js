import axios from 'axios';

// ---------------------> TAGS <---------------------
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

// ----------------> ACTION CREATORS <----------------
export const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
});

// --------------------> THUNKS <--------------------

// Fetch either all or a single user's orders
export const fetchOrders = userId => dispatch => {
    const route = userId ? `/api/users/${userId}/orders` : '/api/orders'
    axios.get(route)
        .then(res => dispatch(receiveOrders(res.data)))
        .catch(err => console.error('Unable to fetch order history', err));
};

// --------------------> REDUCER <--------------------
export default function cart(state = [], action) {
  switch (action.type) {
    case RECEIVE_ORDERS:
      return action.orders;
    default:
      return state;
  }
}
