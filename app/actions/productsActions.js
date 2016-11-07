'use strict'

import axios from 'axios';

// Create constant for Actions
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_ONE_PRODUCT = 'RECEIVE_ONE_PRODUCT';
export const RECEIVE_CATEGORY_PRODUCTS = 'RECEIVE_CATEGORY_PRODUCTS';
export const RECEIVE_NAMED_PRODUCTS = 'RECEIVE_NAMED_PRODUCTS';
export const CREATE_ONE_PRODUCT = 'CREATE_ONE_PRODUCT';

// Create the Actions
const receiveAllProducts = products => ({type: RECEIVE_ALL_PRODUCTS, products});
const receiveOneProduct = product => ({type: RECEIVE_ONE_PRODUCT, product});
const receiveCategoryProducts = categoryProducts => ({type: RECEIVE_CATEGORY_PRODUCTS, categoryProducts});
const receiveNamedProducts = namedProducts => ({type: RECEIVE_NAMED_PRODUCTS, namedProducts});
const createOneProduct = product => ({type: CREATE_ONE_PRODUCT, product});

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
    axios.get(`/api/products?category=${categoryId}`)
        .then(res => {
            dispatch(receiveCategoryProducts(res.data));
            callback && callback(`/products/category/${categoryId}`);
        })
        .catch(err => console.log('Error loading category products', err));
}

// gets filtered products by name from the server
export const receiveNamedProductsFromServer = (name, callback) => dispatch => {
    axios.get(`/api/products?productTitle=${name}`)
        .then(res => {
            dispatch(receiveNamedProducts(res.data));
            callback && callback(`/products/name/${name}`);
        })
        .catch(err => console.log('Error loading named products', err));
}

// creates a story and sends it to the server
export const createOneProductToServer = (product, callback) => dispatch => {
    axios.post('/api/products', product)
        .then(res => res.data)
        .then(product => createOneProduct(product))
        .then(dispatch)
        .catch(err => console.error(`Creating product ${product.title} failed!`, err));
}