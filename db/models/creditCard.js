'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const CreditCard = db.define('creditCards', {
	number: { type: Sequelize.STRING, allowNull: false },
	expiry_date: { type: Sequelize.STRING, allowNull: false },
	security_code: { 
		type: Sequelize.INTEGER, 
		allowNull: false, 	
		validate: {
			isThreeDigit: function(value){
				if (value > 999 || value < 100) {
					throw new Error('Security code must be three digits!');
				}
			}
		}
	},
	credit_cart_type: {
		type: Sequelize.ENUM,
		values: ['amex','mastercard','visa']
	}
})


module.exports = CreditCard;