'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const cartProduct = db.define('cartProducts', {
	sessionId: Sequelize.STRING,
	quantity: Sequelize.INTEGER
})

// Authed user
// // create asso with user


// not Authed user
// // session storage
// // local storage (put object and save it as cookie)

module.exports = cartProduct;