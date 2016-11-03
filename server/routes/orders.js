'use strict'

const epilogue = require('APP/server/epilogue');
const db = require('APP/db');
const productModel = db.model('products');
const addressModel = db.model('addresses');
const userModel = db.model('users');
const creditCardModel = db.model('creditCards');

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
