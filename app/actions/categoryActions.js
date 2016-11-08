'use strict'

import axios from 'axios';

// Create constant for Actions
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

// Create the Actions
export const receiveAllCategories = categories => ({type: RECEIVE_ALL_CATEGORIES, categories});

// Thunk Creators for Actions
export const receiveAllCategoriesFromServer = (callback) => dispatch => {
    axios.get('/api/category')   
        .then(res => {
            dispatch(receiveAllCategories(res.data));
            callback && callback(`categories`);
        })
}