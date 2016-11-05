'use strict'

const db = require('APP/db');
const productModel = db.model('products');
const userModel = db.model('users');
const cartProductModel = db.model('cartProducts');

const customCartsRoutes = require('express').Router() 

module.exports = customCartsRoutes

customCartsRoutes.get('/', (req,res,next) => {
	cartProductModel.getCartProducts(req.sessionID)
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
			.then((newProduct) => {
				productModel.findById(newProduct.product_id)
					.then(product => {
						newProduct.dataValues.product = product.dataValues;
						res.status(201).send(newProduct);
					})
			})
			.catch(err => {
				console.log(err);
				next();
			});
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
		{ quantity: req.body.quantity }, 
		{ where: { sessionId: req.sessionID, product_id: req.params.productId },
		returning: true })
	.then((response) => {
		return cartProductModel.findOne({
			where: { id: response[1][0].id},
			include: [{ model: productModel, required: true }]
		})
	})
	.then((updatedCartProduct) => {
		res.send(updatedCartProduct);
	})
	.catch(next);
})

customCartsRoutes.delete('/:productId', (req,res,next) => {
	console.log('got to destroy', req.params.productId, req.sessionID)
	cartProductModel.destroy(
		{ where: { sessionId: req.sessionID, product_id: req.params.productId } }
	)
	.then((thing) => {
		console.log('post destroy', thing);
		res.sendStatus(204)
	})
	.catch(next);
})