'use strict'

import { RECEIVE_ONE_PRODUCT } from '../actions/productsActions'

// Reducer for Product
export default function productReducer(prevState = {}, action){
    switch(action.type){
        case RECEIVE_ONE_PRODUCT: return action.product;
        default: return prevState;
    }
}