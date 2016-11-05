import axios from 'axios';

// ---------------------> TAGS <---------------------
export const RECEIVE_ORDER = 'RECEIVE_ORDER';

// ----------------> ACTION CREATORS <----------------
export const receiveOrder = order => ({
  type: RECEIVE_ORDER,
  order
});

// --------------------> THUNKS <--------------------

export const fetchOrder = (id) => dispatch => {
  axios.get(`/api/orders/${id}`)
    .then(res => dispatch(receiveOrder(res.data)))
    .catch(err => {
      console.error('Unable to fetch order', err);
    });
};

// --------------------> REDUCER <--------------------
export default function order(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ORDER:
      return action.order;
    default:
      return state;
  }
}
