import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> TAGS <---------------------
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

// ----------------> ACTION CREATORS <----------------
export const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
});

// --------------------> THUNKS <--------------------

export const fetchOrders = (id) => dispatch => {
    // switch to this when we fetch by userid
    // axios.get(`/api/users/${id}`)

    // works for testing
    axios.get(`/api/users/1`)
        .then(res => {
            // console.log(res.data.orders)
            return dispatch(receiveOrders(res.data.orders))
        })
        .catch(err => {
            console.error('Unable to fetch order history', err);
        });
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
