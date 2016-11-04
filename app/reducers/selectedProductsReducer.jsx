'use strict'

import { RECEIVE_CATEGORY_PRODUCTS } from '../actions/productsActions'

// Reducer for filtered product
export default function selectedProductsReducer(prevState = [], action){
    switch(action.type){
        case RECEIVE_CATEGORY_PRODUCTS: return action.categoryProducts;
        default: return prevState;
    }
}