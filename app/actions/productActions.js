'use strict'

import axios from 'axios';

// Create constant for Actions
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';

// Create the Actions
const receiveAllProducts = products => ({type: RECEIVE_ALL_PRODUCTS, products});

// Thunk Creators for Actions
export const receiveAllProductsFromServer = (products, callback) => dispatch => {
    axios.get('/api/products')   
        .then(res => {
            dispatch(receiveAllProducts(res.data));
            callback && callback(`products`);
        })
}