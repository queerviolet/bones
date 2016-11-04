'use strict'

const db = require('APP/db');
const productModel = db.model('products');
const userModel = db.model('users');
const cartProductModel = db.model('cartProducts');


const customCartsRoutes = require('express').Router() 

module.exports = customCartsRoutes

customCartsRoutes.get('/', (req,res,next) => {
	cartProductModel.findAll({
		where: { sessionId: req.sessionID }
	})
	.then(result => res.send(result))
	.catch(next);
})

customCartsRoutes.post('/', (req,res,next) => {
	let cartProduct = cartProductModel.build({
		sessionId: req.sessionID,
		quantity: req.body.quantity,
		product_id: req.body.productId
	})

	cartProduct.validate()
	.then(err => {
		if(err) {
			let error = new Error(err.errors[0].message);
			error.status = 409;
			return next(error)
		}
		return cartProduct.save()
			.then(() => res.status(201).send(cartProduct))
			.catch(next);
	})
	.catch(next);
})

customCartsRoutes.delete('/', (req,res,next) => {
	cartProductModel.clearCart(req.sessionID)
	.then(() => res.sendStatus(204))
	.catch(next)
})

customCartsRoutes.put('/:productId', (req,res,next) => {
	cartProductModel.update(
		{ quantity: req.body.quantity}, 
		{ where: {sessionId: req.sessionID, product_id: req.params.productId} }
	)
	.then(() => res.sendStatus(204))
	.catch(next);
})

customCartsRoutes.delete('/:productId', (req,res,next) => {
	cartProductModel.destroy(
		{ where: {sessionId: req.sessionID, product_id: req.params.productId} }
	)
	.then(() => res.sendStatus(204))
	.catch(next);
})