'use strict'

import { RECEIVE_FILTERED_PRODUCTS } from '../actions/productsActions'

// Reducer for filtered product
export default function selectedProductsReducer(prevState = {}, action){
    switch(action.type){
        case RECEIVE_FILTERED_PRODUCTS: return action.product;
        default: return prevState;
    }
}
