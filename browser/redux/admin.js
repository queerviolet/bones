import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> TAGS <---------------------
export const RECEIVE_ALL_ORDERS = 'RECEIVE_ALL_ORDERS';

// ----------------> ACTION CREATORS <----------------
export const receiveAllOrders = adminorders => ({
    type: RECEIVE_ALL_ORDERS,
    adminorders
});

// --------------------> THUNKS <--------------------

export const fetchAllOrders = () => dispatch => {
    axios.get(`/api/orders`)
        .then(res => {
            return dispatch(receiveAllOrders(res.data))
        })
        .catch(err => {
            console.error('Unable to fetch order history', err);
        });
};

// --------------------> REDUCER <--------------------
export default function adminOrders(state = [], action) {
  switch (action.type) {
    case RECEIVE_ALL_ORDERS:
      return action.adminorders;
    default:
      return state;
  }
}
