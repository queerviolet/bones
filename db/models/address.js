'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Address = db.define('addresses', {
	street1: { type: Sequelize.STRING, allowNull: false },
	street2: Sequelize.STRING,
	city: { type: Sequelize.STRING, allowNull: false },
	state: { type: Sequelize.STRING, allowNull: false },
	zip: { type: Sequelize.STRING, allowNull: false }
})

module.exports = Address;