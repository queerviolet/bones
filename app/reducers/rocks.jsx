import axios from 'axios';

// ---------------------> Action type constant <---------------------
export const RECEIVE_ROCKS= 'RECEIVE_ROCKS';

// ----------------> ACTION CREATORS <----------------
export const receiveRocks = products => ({
  type: RECEIVE_ROCKS,
  products
});

// --------------------> THUNKS <--------------------

export const fetchRocks = () => dispatch => {
  axios.get('/api/rocks')
    .then(res => dispatch(receiveRocks(res.data)))
    .catch(err => {
      console.error('Unable to fetch rocks products', err);
    });
};

// --------------------> REDUCER <--------------------
export default function rocks(state = [], action) {
  switch (action.type) {
    case RECEIVE_:
      return action.rocks;
    default:
      return state;
  }
}
