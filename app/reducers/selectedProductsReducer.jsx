'use strict'

import { RECEIVE_CATEGORY_PRODUCTS, RECEIVE_NAMED_PRODUCTS } from '../actions/productsActions'

// Reducer for filtered product
export default function selectedProductsReducer(prevState = [], action){
    switch(action.type){
        case RECEIVE_CATEGORY_PRODUCTS: return action.categoryProducts;
        case RECEIVE_NAMED_PRODUCTS: return action.namedProducts;
        default: return prevState;
    }
}