'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
	name: { type: Sequelize.STRING, allowNull: false },
	price: { type: Sequelize.FLOAT, allowNull: false },
	description: Sequelize.TEXT,
	quantity: { type: Sequelize.INTEGER, allowNull: false },
	type: { type: Sequelize.ENUM, values: ['chair', 'table', 'bed', 'closet', 'sofa', 'desk'] },
	style: { type: Sequelize.ENUM, values: ['coastal', 'contemporary', 'traditional', 'modern', 'gothic', 'brutalist'] },
	color: Sequelize.STRING,
	material: Sequelize.STRING,
	images: Sequelize.ARRAY(Sequelize.TEXT)
})

module.exports = Product;