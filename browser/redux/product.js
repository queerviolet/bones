import axios from 'axios';

// ---------------------> TAGS <---------------------
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const ADD_REVIEW = 'ADD_REVIEW';

// ----------------> ACTION CREATORS <----------------
export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
});

export const addReview = review => ({
  type: ADD_REVIEW,
  review
});

// --------------------> THUNKS <--------------------

export const fetchProduct = (id) => dispatch => {
  axios.get(`/api/products/${id}`)
    .then(res => dispatch(receiveProduct(res.data)))
    .catch(err => {
      console.error('Unable to fetch product', err);
    });
};

export const createReview = (data, cb) => dispatch => {
  axios.post(`/api/products/${data.productId}/reviews`, data)
    .then(res => {
      dispatch(addReview(res.data))
      cb();
    })
    .catch(err => {
      console.error(`Unable to create review for product ${data.productId}`, err);
      cb(err);
    });
};

// --------------------> REDUCER <--------------------
export default function product(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return action.product;
    case ADD_REVIEW:
      return Object.assign(state, {reviews: [action.review, ...state.reviews]});
    default:
      return state;
  }
}
