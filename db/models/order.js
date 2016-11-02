'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	confirmation_number: Sequelize.STRING,
	status: {
		type: Sequelize.ENUM,
		values: ['Created', 'Processing', 'Cancelled', 'Completed']
	},
	order_date: Sequelize.DATE
},{
	hooks: {
		beforeCreate: function(){
			this.order_date = new Date();
		}
	}
})

module.exports = Order;