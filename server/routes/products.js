'use strict'

const epilogue = require('APP/server/epilogue')
const db = require('APP/db')
const reviewModel = db.model('reviews');
const productModel = db.model('products');

const customProductRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customProductRoutes;

// Epilogue will automatically create standard RESTful routes
// const products = epilogue.resource({
//     model: db.model('products'),
//     endpoints: ['/products']
// })


customProductRoutes.get('/', (req,res,next) => {
    productModel.findAll()
        .then(products => res.send(products))
        .catch(next);
})

customProductRoutes.get('/:id', function(req, res, next){
    
    
    productModel.findOne({
        where: {
            id: req.params.id
        },
        include: [{ model: reviewModel, required: false }]
    })
    .then(product => res.send(product))
    .catch(next);
})

// customProductRoutes.get('/:productid/reviews/:reviewid', function(req, res, next){
//     const reviewModel = db.model('reviews');
//     reviewModel.findAll({where:{
//         product_id: req.params.productid,
//         id: req.params.reviewid
//     }})
//     .then(revs => res.send(revs))
// })