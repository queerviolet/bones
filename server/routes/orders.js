'use strict'

const epilogue = require('APP/server/epilogue');
const Bluebird = require('bluebird');

const db = require('APP/db');
const productModel = db.model('products');
const addressModel = db.model('addresses');
const userModel = db.model('users');
const creditCardModel = db.model('creditCards');
const orderModel = db.model('orders');
const lineItemModel = db.model('lineItems');
const cartProductModel = db.model('cartProducts');

const customOrdersRoutes = require('express').Router() 
module.exports = customOrdersRoutes

const Chance = require('chance');
const chance = new Chance(Math.random);
let newOrder = {
	confirmation_number: chance.string({
			pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
			length: 20
		})
}

// // Epilogue will automatically create standard RESTful routes
// const orders = epilogue.resource({
// 	model: db.model('orders'),
// 	include: [
		// 	{ model: addressModel, as: 'shipping_address', required: false },
		// 	{ model: addressModel, as: 'billing_address', required: false },
		// 	{ model: creditCardModel, include:[{ model: userModel }], required: false },
		// 	{ model: userModel, required: false },
		// 	{ model: lineItemModel }
		// ],
// 	endpoints: ['/orders', '/orders/:id']
// });


customOrdersRoutes.get('/:id', (req,res,next) => {
	orderModel.findOne({
		where: {id: req.params.id},
		include: [{model: lineItemModel, include: [{model: productModel}]}]
	})
	.then(result => res.send(result))
	.catch(next);
})

// This was working!!
customOrdersRoutes.post('/', (req,res,next) => {

	orderModel.findOrCreate({
		where: newOrder,
		include: [
			{ model: addressModel, as: 'shipping_address', required: false },
			{ model: addressModel, as: 'billing_address', required: false },
			{ model: creditCardModel, include:[{ model: userModel }], required: false },
			{ model: userModel, required: false },
			{ model: lineItemModel }
		]})
	.spread(order => {
		return addressModel
			.findOrCreate({where: req.body.billing_address})
			.spread(addressInfo => order.setBilling_address(addressInfo))
			.catch(next)
	})
	.then(order => {
		return addressModel
			.findOrCreate({where: req.body.shipping_address})
			.spread(addressInfo => order.setShipping_address(addressInfo))
			.catch(next)
	})
	.then(order => {
		return creditCardModel
			.findOrCreate({where: req.body.creditCard})
			.spread(creditCardInfo => order.setCreditCard(creditCardInfo))
			.catch(next)
	})
	.then(order => {
		return cartProductModel.getCartProducts(req.sessionID)
			.then(cartProducts => {
				Bluebird.map(cartProducts, cartProduct => {
					lineItemModel.create({
						quantity: cartProduct.quantity,
						order_id: order.id,
						product_id: cartProduct.product_id,
						price: cartProduct.product.price
					})
					.then(() => {
						cartProductModel.destroy({where: {id: cartProduct.id}})
					})
					.catch(next)
				})
				.then(() => res.status(201).send(order))
				.catch(next)
			})
			.catch(next)
	})
	.catch(next)
})







// failures
// customOrdersRoutes.post('/', (req,res,next) => {

// 	let newOrder = {}

// 	addressModel.findOrCreate({where: req.body.billing_address})
// 	.spread(address => newOrder.billing_address_id = address.id)
// 	.then(() => {
// 		return addressModel.findOrCreate({where: req.body.shipping_address})
// 		.spread(address => newOrder.shipping_address_id = address.id)
// 		.catch(next)
// 	})
// 	.then(() => {
// 		return creditCardModel.findOrCreate({where: req.body.creditCard})
// 		.spread(creditCard => newOrder.credit_card_id = creditCard.id)
// 		.catch(next)
// 	})
// 	.then(() => {
// 		cartProductModel.getCartProducts(req.sessionID)
// 		.then(cartProducts => {
// 			orderModel.create(newOrder)
// 			.then(createdOrder => {
// 				Bluebird.map(cartProducts, cartProduct => {
// 					lineItemModel.create({
// 						quantity: cartProduct.quantity,
// 						product_id: cartProduct.product_id,
// 						price: cartProduct.product.price
// 					})
// 					.then(createdLineItem => {
// 						createdLineItem.setOrder(createdOrder)
// 						cartProductModel.destroy({where: {id: createdLineItem.product_id}})
// 					})
// 					.catch(next)
// 				})
// 				.then(() => {
// 					orderModel.findOne({
// 						where: {
// 							id: createdOrder.id,
// 						},
// 						include: [
// 								{ model: addressModel, as: 'shipping_address', required: false },
// 								{ model: addressModel, as: 'billing_address', required: false },
// 								{ model: creditCardModel, include:[{ model: userModel }], required: false },
// 								{ model: userModel, required: false },
// 								{ model: lineItemModel }
// 							]
// 					})
// 					.then(order => res.send(order))
// 					.catch(next)
// 				})
// 				.catch(next)
// 			})
// 		})
// 	})
// 	.catch(next)
// })





// customOrdersRoutes.post('/', (req,res,next) => {

// 	let newOrder = {}

// 	addressModel.findOrCreate({where: req.body.billing_address})
// 	.spread(address => {
// 		newOrder.billing_address_id = address.id
// 		return addressModel.findOrCreate({where: req.body.shipping_address})
// 			.spread(address => {
// 				newOrder.shipping_address_id = address.id
// 				return creditCardModel.findOrCreate({where: req.body.creditCard})
// 					.spread(creditCard => {
// 						newOrder.credit_card_id = creditCard.id
// 						return orderModel.createAndGetAssociation(newOrder)
// 						.then(order => {
// 							return cartProductModel.getCartProducts(req.sessionID)
// 								.then(cartProducts => {
// 									Bluebird.map(cartProducts, cartProduct => {
// 										lineItemModel.create({
// 											quantity: cartProduct.quantity,
// 											order_id: order.id,
// 											product_id: cartProduct.product_id,
// 											price: cartProduct.product.price
// 										})
// 										.then(() => {
// 											cartProductModel.destroy({where: {id: cartProduct.id}})
// 										})

// 										.catch(next)
// 									})
// 									.then(() => res.status(201).send(order))
// 									.catch(next)
// 								})
								
// 								.catch(next)
// 							})
// 							.catch(next)
// 					})
// 					.catch(next)
// 			})
// 			.catch(next)
// 	})
// 	.catch(next)
// })


