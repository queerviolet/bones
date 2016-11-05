'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const productModel = require('./product');

// Each product and corresponding quantity in user carts
// sessionId (str): Express session of the user
// quantity (int): Order amount of the product
const cartProduct = db.define('cartProducts', {
	sessionId: Sequelize.STRING,
	quantity: Sequelize.INTEGER
}, {
	// noDuplicatedCartProducts (fn): Validate the sessionId/productId is not a duplicate
	validate: {
		noDuplicatedCartProducts: function(next) {
			cartProduct.findOne({
				where: {
					sessionId: this.sessionId,
					product_id: this.product_id
				}
			})
			.then(result => {
				if (result !== null) {
					next('Product already in the cart')
				}
				next()
			})
		}
	},
	// clearCart (fn): Remove all of the user's cart products
	classMethods: {
		clearCart: sessionId => cartProduct.destroy({ where: { sessionId: sessionId }}),
		getCartProducts: sessionId => cartProduct.findAll({ 
			where: { sessionId: sessionId },
			include: [{model: productModel}]
		})
	}
})

// Authed user
// // create asso with user

// not Authed user
// // session storage
// // local storage (put object and save it as cookie)

module.exports = cartProduct;
