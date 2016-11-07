'use strict'

import axios from 'axios';

// Create constants for Actions
export const CREATE_ONE_REVIEW = 'CREATE_ONE_REVIEW';

// Create the Actions
export const createOneReview = review => ({type: CREATE_ONE_REVIEW, review});

// Thunk Creators for Actions
// create a review and send to the server
export const createOneReviewToServer = (review, callback) => dispatch => {
    axios.post('api/reviews', review)
        .then(review => dispatch(createOneReview(review)))
        .catch(err => console.error(`Creating review ${review.title} failed!`, err));
}