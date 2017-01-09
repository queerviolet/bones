'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Reviews = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  comment: {
    type: Sequelize.TEXT
  }
});

module.exports = Reviews;
