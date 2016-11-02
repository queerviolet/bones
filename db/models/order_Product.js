'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const OrderProduct = db.define('order_product', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    subTotal: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    }
});

module.exports = OrderProduct;
