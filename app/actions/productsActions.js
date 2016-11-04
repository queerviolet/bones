'use strict'

import axios from 'axios';

// Create constant for Actions
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_ONE_PRODUCT = 'RECEIVE_ONE_PRODUCT';
export const RECEIVE_FILTERED_PRODUCTS = 'RECEIVE_FILTERED_PRODUCTS';

// Create the Actions
const receiveAllProducts = products => ({type: RECEIVE_ALL_PRODUCTS, products});
const receiveOneProduct = product => ({type: RECEIVE_ONE_PRODUCT, product});
const receiveFilteredProducts = product => ({type: RECEIVE_FILTERED_PRODUCTS, product});

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

export const receiveFilteredProductsFromServer = (categoryId, callback) => dispatch => {
    axios.get(`/api/products?category=${categoryId}`)
        .then(res => {
            dispatch(receiveFilteredProducts(res.data));
            callback && callback(`products/category/${categoryId}`);
        })
}

