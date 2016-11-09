'use strict'

const epilogue = require('APP/server/epilogue');
const db = require('APP/db');
const reviewModel = db.model('reviews');
const productModel = db.model('products');
const userModel = db.model('users');

const router = require('express').Router();
module.exports = router;

// Epilogue will automatically create standard RESTful routes
const products = epilogue.resource({
	model: db.model('products'),
	include: [
		{ 
			model: reviewModel, 
			include: [{ model: userModel, required: true }],
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

// Create a review for the input product
router.post('/:productId/reviews', (req, res, next) => {
	reviewModel.create({
		product_id: req.params.productId,
		user_id: req.session.userId,
		comment: req.body.comment,
		rating: req.body.rating
	})
		// Get the assoicated user object
		.then(review => review.reload({
			include: [{ model: userModel, required: true }]
		}))
		.then(review => res.status(201).send(review))
		.catch(next);
});




// // -------------------------------------------------
// // ----------------> custom routes <----------------
// // -------------------------------------------------


// // ----------------> '/products/' <----------------

// router.get('/', (req,res,next) => {
// 	productModel.findAll({ 
// 		where: req.query,
// 		include: [{ model: reviewModel, required: false }] 
// 	})	
// 		.then(result => res.send(result))
// 		.catch(next);
// });

customProductRoutes.post('/', (req,res,next) => {
	productModel.create(req.body)
		.then(result => res.send(result))
		.catch(next);
});
// router.post('/', (req,res,next) => {
// 	productModel.create(req.body)
// 		.then(result => res.send(result))
// 		.catch(next);
// });

// // ----------------> '/products/:id' <-------------

// router.get('/:id', (req,res,next) => {
// 	productModel.findOne({
// 		where: { id: req.params.id },
// 		include: [{ model: reviewModel, required: false }]
// 	})
// 	.then(result => res.send(result))
// 	.catch(next);
// });

// router.put('/:id', (req,res,next) => {
// 	productModel.findById(req.params.id)
// 		.then(result => result.update(req.body))
// 		.then(updated => res.status(201).send(updated))
// 		.catch(next);
// });

// router.delete('/:id', (req,res,next) => {
// 	productModel.findById(req.params.id)
// 		.then(result => result.destroy())
// 		.then(() => res.sendStatus(204))
// 		.catch(next);
// });

