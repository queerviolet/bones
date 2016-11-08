'use strict'

import { RECEIVE_ALL_CATEGORIES } from '../actions/categoryActions';

// Reducer for Categories
export default function categoriesReducer(prevState = [], action){
    switch(action.type){
        case RECEIVE_ALL_CATEGORIES: return action.categories;
        default: return prevState;
    }
}
