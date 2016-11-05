'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db');
const addressModel = db.model('addresses');
const creditCardModel = db.model('creditCards');
const lineItemModel = db.model('lineItems');
const userModel = require('./user')

const Chance = require('chance');
const chance = new Chance(Math.random);

const Order = db.define('orders', {
	confirmation_number: {
		type: Sequelize.STRING,
		defaultValue: chance.string({
			pool:'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
			length: 20
		})
	},
	status: {
		type: Sequelize.ENUM,
		values: ['created', 'processing', 'cancelled', 'completed'],
		defaultValue: 'created'
	},
	order_date: {
		type: Sequelize.DATE,
		defaultValue: new Date()
	}
})

module.exports = Order;