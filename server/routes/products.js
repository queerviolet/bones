'use strict'

const epilogue = require('APP/server/epilogue');
const db = require('APP/db');
const reviewModel = db.model('reviews');
const productModel = db.model('products');
const userModel = db.model('users');

const customProductRoutes = require('express').Router();
module.exports = customProductRoutes;

// Epilogue will automatically create standard RESTful routes
const products = epilogue.resource({
	model: db.model('products'),
	include: [
		{ 
			model: reviewModel, 
			include: [{ model: userModel }],
			required: false 
		}
	],
	search: [{
		param: 'category',
		attributes: ['category']
	}],
	// search example
	// URL : /products?category=bedroom
	// findAll(where: {category: bedroom})
	endpoints: ['/products', '/products/:id']
});




// // -------------------------------------------------
// // ----------------> custom routes <----------------
// // -------------------------------------------------


// // ----------------> '/products/' <----------------

// customProductRoutes.get('/', (req,res,next) => {
// 	productModel.findAll({ 
// 		where: req.query,
// 		include: [{ model: reviewModel, required: false }] 
// 	})	
// 		.then(result => res.send(result))
// 		.catch(next);
// });

// customProductRoutes.post('/', (req,res,next) => {
// 	productModel.create(req.body)
// 		.then(result => res.send(result))
// 		.catch(next);
// });

// // ----------------> '/products/:id' <-------------

// customProductRoutes.get('/:id', (req,res,next) => {
// 	productModel.findOne({
// 		where: { id: req.params.id },
// 		include: [{ model: reviewModel, required: false }]
// 	})
// 	.then(result => res.send(result))
// 	.catch(next);
// });

// customProductRoutes.put('/:id', (req,res,next) => {
// 	productModel.findById(req.params.id)
// 		.then(result => result.update(req.body))
// 		.then(updated => res.status(201).send(updated))
// 		.catch(next);
// });

// customProductRoutes.delete('/:id', (req,res,next) => {
// 	productModel.findById(req.params.id)
// 		.then(result => result.destroy())
// 		.then(() => res.sendStatus(204))
// 		.catch(next);
// });

