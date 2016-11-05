'use strict'

const epilogue = require('APP/server/epilogue');
const db = require('APP/db');
const userModel = db.model('users');
const addressModel = db.model('addresses');
const creditCardModel = db.model('creditCards');

const customUserRoutes = require('express').Router();

module.exports = customUserRoutes;

// // ----------------> '/users/' <-----------------------

customUserRoutes.get('/', (req,res,next) => {
	userModel.findAll()
		.then(result => res.send(result))
		.catch(next);
});


// how to set addresses & creditcard ?
customUserRoutes.post('/', (req,res,next) => {
	userModel.create(req.body)
		.then(result => res.send(result))
		.catch(next);
});

// // ----------------> '/users/:id' <---------------------

customUserRoutes.get('/:id', function(req, res, next){
	userModel.findOne({
		where: { id: req.params.id },
		include: [
			{ model: addressModel, as: 'shipping_address', required: false },
			{ model: addressModel, as: 'billing_address', required: false },
			{ model: creditCardModel, required: false }
		]
	})
	.then(result => res.send(result))
	.catch(next);
});

// how to update addresses & creditcard ?
customUserRoutes.put('/:id', (req,res,next) => {
	userModel.findById(req.params.id)
		.then(result => result.update(req.body))
		.then(updated => res.status(201).send(updated))
		.catch(next);
});

customUserRoutes.delete('/:id', (req,res,next) => {
	userModel.findById(req.params.id)
		.then(result => result.destroy())
		.then(() => res.sendStatus(204))
		.catch(next);
});



// // Epilogue will automatically create standard RESTful routes
// const users = epilogue.resource({
// 		model: db.model('users'),
// 		include: [
// 			{ model: addressModel, as: 'shipping_address', required: false },
// 			{ model: addressModel, as: 'billing_address', required: false },
// 			{ model: creditCardModel, required: false }
// 		],
// 		endpoints: ['/users', '/users/:id']
// })


// // -------------------------------------------------
// // ----------------> epilogue auth <----------------
// // -------------------------------------------------

// const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
// users.delete.auth(mustBeLoggedIn)
// users.delete.auth(selfOnly)
// users.list.auth(forbidden)
// users.read.auth(mustBeLoggedIn)