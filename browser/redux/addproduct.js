import axios from 'axios';
import { browserHistory } from 'react-router';

// ---------------------> TAGS <---------------------
export const CREATED_PRODUCT = 'CREATED_PRODUCT';

// ----------------> ACTION CREATORS <----------------
export const createdProduct = newProduct => ({
  type: CREATED_PRODUCT,
  newProduct
});

// --------------------> THUNKS <--------------------

export const addProduct = ({ name, price, quantity, description, color, material, image1, image2, image3, style, type, category }) => (dispatch, getState) => {
  // If cart is empty, do not create order and redirect to /cart
//   if (!getState().cartProducts.length) {
//     console.error('Cannot checkout with an empty cart')
//     return browserHistory.push(`cart`);
//   }
    let images = [image1];
    if (image2) images.push(image2);
    if (image3) images.push(image3);
  axios.post(`/api/products`, { name, price, quantity, description, color, material, style, type, category, images })
    .then(res => {
      dispatch(createdProduct(res.data))
    //   browserHistory.push(`/confirmation/${res.data.id}`);
    })
    .catch(err => console.error('Unable to create product', err));
};

// --------------------> REDUCER <--------------------
export default function newProduct(state = {}, action) {
  switch (action.type) {
    case CREATED_PRODUCT:
      return action.newProduct;
    default:
      return state;
  }
}
