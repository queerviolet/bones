'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('orders', {
  status:  {
    Sequelize.ENUM('in-cart', 'processing', 'completed', 'cancelled'),
    defaultValue: 'created'
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});


module.exports = Order;
