'use strict'

import { RECEIVE_ALL_PRODUCTS } from '../actions/productActions';

// Reducer for Products
export default function productsReducer(prevState = [], action){
    switch(action.type){
        case RECEIVE_ALL_PRODUCTS: return action.products;
        default: return prevState;
    }
}