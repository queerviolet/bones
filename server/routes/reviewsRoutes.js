'use strict';

const router = require('express').Router();
const db = require('APP/db');
const Review = db.model('productReview');

const Promise = require('sequelize').Promise;

// Post to the review table
router.post('/', (req, res, next) => {
    Review.create(req.body)
        .then(review => res.status(201).json(review))
        .catch(err => console.log('Error creating product!', err));
})


module.exports =router;

//Create a review for a product for a review writer
// incomplete route

// router.post('/product/:productId', function(req, res, next) {
//     if (req.user) {

//         let findUser = User.findById(req.user.id)

//         let findProduct = Product.findById(req.params.productId)

//         let createReview = Review.create(req.body)

//         //resolve promises to avoid async error
//         Promise.all([findUser, findProduct, createReview])
//             .spread(function(user,product, review) {
//                // product.addReview(review)
//                 //res.send(review)
//             })
//             .catch(next)

//     } else {
//         res.sendStatus(401)
//     }
// })

//Delete review only Admin users or the review writer can delete review 
// incomplete route to be completed later
//where to route the user after deleting the review?
/*
router.delete('/:reviewId', function(req, res, next) {
    Review.findById(req.params.reviewId)
        .then((review)=>{
             (req.user.isAdmin || req.user.id === review.userId)?
           
        })
    

})*/