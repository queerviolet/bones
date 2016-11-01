'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('product', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    inventoryQty: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    photoUrl: {
        type: Sequelize.STRING,
        defaultValue: null
    },
    isDigitalShip: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    classMethods: {
        createProduct: (productObj, userId) => {
        productObj.userId = userId;
            return Product.create(productObj);
        }
    }
});

module.exports = Product;