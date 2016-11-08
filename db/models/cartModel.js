'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Cart = db.define('cart', {
    items: {
        type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.INTEGER))
    },
    sessionID: {
        type: Sequelize.INTEGER
    }
});

// instance method to add to cart.
// instance method to update cart total price.

// cart belongsTo user

module.exports = Cart;
