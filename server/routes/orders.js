'use strict'

const epilogue = require('APP/server/epilogue');
const db = require('APP/db');
const productModel = db.model('products');
const addressModel = db.model('addresses');
const userModel = db.model('users');
const creditCardModel = db.model('creditCards');
const orderModel = db.model('orders');

const customOrdersRoutes = require('express').Router() 
module.exports = customOrdersRoutes

// Epilogue will automatically create standard RESTful routes
const orders = epilogue.resource({
	model: db.model('orders'),
	include: [
    	{ 
    		model: addressModel, 
    		as: 'shipping_address', 
    		required: false 
    	},
			{ 
				model: addressModel, 
				as: 'billing_address', 
				required: false 
			},
			{ 
				model: creditCardModel, 
				include:[{ model: userModel }],
				required: false 
			},
			{ 
				model: userModel, 
				required: false 
			}			
	],
	endpoints: ['/orders', '/orders/:id']
});

// customOrdersRoutes.get('/:id/billing-address', (req,res,next) => {
// 	orderModel.findById(req.params.id)
// 	.then(order => order.getBilling_address())
// 	.then(result => res.send(result))
// 	.catch(next);
// })

// customOrdersRoutes.post('/:id/billing-address', (req,res,next) => {
// 	orderModel.findById(req.params.id)
// 	.then(order => order.createBilling_address(req.body))
// 	.then(newAddress => res.send(newAddress))
// 	.catch(next);
// })


orders.create.fetch((req,res,next) => {
	console.log('hi')
	orderModel.create(req.body.order)
	.then(order => order.addBilling_address(req.body.billing))
	.then(order => order.addShipping_address(req.body.shipping))
	.then(order => order.addCreditCard(req.body.creditCard))
	.then(order => order.addUser(req.body.user))
	// .then(order => order.createBilling_address(req.body.billing))
	// .then(order => order.createShipping_address(req.body.shipping))
	// .then(order => order.createCreditCard(req.body.creditCard))
	// .then(order => order.createUser(req.body.user))
	// .then(order => order.getUser())
	.then(newAddress => res.send(newAddress))
	.catch(next);
})




// products.read.fetch.before((req, res, context) => {
//   context.criteria['order_id'] = null;
//   return context.continue;
// })


const obj = 
{
	"order": {
		"confirmation_number": "uDALSdsafasR",
		"status": "completed",
		"order_date": "2085-05-27T02:31:40.236Z"
	},
	"shipping": {
	"street1": "831 Vela Avenuessdf",
	"street2": "(261)",
	"city": "Evivarnow",
	"state": "IA",
	"zip": "00276"
	},
	"billing": {
		"street1": "737 Deet View",
		"street2": "(468)",
		"city": "Cislipal",
		"state": "KS",
		"zip": "57382"
	},
	"creditCard": {
		"id": "1",
		"number": "5130933397360722",
		"expiry_date": "11/2023",
		"security_code": "692"
	},
	"user": {
		"first_name": "Inez",
		"last_name": "Taylor",
		"email": "bu@zaj.ax",
		"password_digest": "$2a$10$WJW4VnanT1r.jUsAadmPXeB/0FLNmJLv5iAZaFQqcoyYkthdf1LZi",
		"shipping_address_id": "3",
		"billing_address_id": "4"
	}
}

