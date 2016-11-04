'use strict'

import axios from 'axios';

// Create constant for Actions
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_ONE_PRODUCT = 'RECEIVE_ONE_PRODUCT';

// Create the Actions
const receiveAllProducts = products => ({type: RECEIVE_ALL_PRODUCTS, products});
const receiveOneProduct = product => ({type: RECEIVE_ONE_PRODUCT, product});

// Thunk Creators for Actions
export const receiveAllProductsFromServer = (callback) => dispatch => {
    axios.get('/api/products')   
        .then(res => {
            dispatch(receiveAllProducts(res.data));
            callback && callback(`products`);
        })
}

export const receiveOneProductFromServer = (productId, callback) => dispatch => {
    axios.get(`/api/products/${productId}`)   
        .then(res => {
            dispatch(receiveOneProduct(res.data));
            callback && callback(`products/${productId}`);
        })
}