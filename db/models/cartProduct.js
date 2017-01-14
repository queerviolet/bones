'use strict';

const Sequelize = require('sequelize');
const db = require('App/db');

const cartProduct = db.define('cartProducts', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = cartProduct;
