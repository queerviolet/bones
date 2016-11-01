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

// cart belongsTo user

module.exports = Cart;