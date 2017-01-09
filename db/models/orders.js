'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Orders = db.define('orders', {
  products: Sequelize.ARRAY(Sequelize.INTEGER),

});


module.exports = Orders;
