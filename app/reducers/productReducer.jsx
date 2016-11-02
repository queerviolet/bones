'use strict'

import { RECEIVE_ALL_PRODUCTS } from '../actions/productActions';

// Reducer for Categories
export default function categoriesReducer(prevState = [], action){
    switch(action.type){
        case RECEIVE_ALL_PRODUCTS: return action.products;
        default: return prevState;
    }
}