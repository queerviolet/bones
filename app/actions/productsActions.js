'use strict'

import axios from 'axios';

// Create constant for Actions
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_ONE_PRODUCT = 'RECEIVE_ONE_PRODUCT';
export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS';

// Create the Actions
const receiveAllProducts = products => ({type: RECEIVE_ALL_PRODUCTS, products});
const receiveOneProduct = product => ({type: RECEIVE_ONE_PRODUCT, product});
const receiveCategoryProducts = categoryProducts => ({type: RECEIVE_CATEGORY_PRODUCTS, categoryProducts});

// Thunk Creators for Actions
// get products (all) from the server
export const receiveAllProductsFromServer = (callback) => dispatch => {
    axios.get('/api/products')
        .then(res => {
            dispatch(receiveAllProducts(res.data));
            callback && callback(`products`);
        })
}

// get one product by id from the server
export const receiveOneProductFromServer = (productId, callback) => dispatch => {
    axios.get(`/api/products/${productId}`)
        .then(res => {
            dispatch(receiveOneProduct(res.data));
            callback && callback(`products/${productId}`);
        })
}

// gets filtered products by catergory from the server
export const receiveCategoryProductsFromServer = (categoryId, callback) => dispatch => {
    console.log(categoryId);
    axios.get(`/api/products?category=${categoryId}`)
        .then(res => {
            dispatch(receiveCategoryProducts(res.data));
            callback && callback(`products/category/${categoryId}`);
        })
        .catch(err => console.log('Error loading category filter', err));
}

