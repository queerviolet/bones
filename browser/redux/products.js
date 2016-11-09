import axios from 'axios';

// ---------------------> TAGS <---------------------
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ADDED_PRODUCT = 'ADDED_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

// ----------------> ACTION CREATORS <----------------
export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
});

export const addedProduct = product => ({
  type: ADDED_PRODUCT,
  product
});

export const removeProduct = productId => ({
  type: REMOVE_PRODUCT,
  productId
});

// --------------------> THUNKS <--------------------

export const fetchProducts = () => dispatch => {
  axios.get('/api/products')
    .then(res => dispatch(receiveProducts(res.data)))
    .catch(err => {
      console.error('Unable to fetch products', err);
    });
};

export const addProduct = (data, cb) => dispatch => {
  axios.post('/api/products', data)
    .then(res => {
      console.log(res.data);
      dispatch(addedProduct(res.data));
      cb();
    })
    .catch(err => {
      console.error('Unable to create products', err);
      cb(err);
    });
};

export const deleteProduct = (productId) => dispatch => {
  axios.delete(`/api/products/${productId}`)
    .then(() => dispatch(removeProduct(productId)))
    .catch(err => {
      console.error('Unable to fetch products', err);
    });
};

// --------------------> REDUCER <--------------------
export default function products(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products;
    case ADDED_PRODUCT:
      return [...state, action.product]
    case REMOVE_PRODUCT:
      return state.filter(product => product.id !== action.productId)
    default:
      return state;
  }
}
