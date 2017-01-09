'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Rocks = db.define('rocks', {
  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false
    }
  },
  photo: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  price: Sequelize.FLOAT,
  weight: Sequelize.FLOAT,
  color: Sequelize.ENUM('black', 'brown', 'grey', 'white', 'blue'),
  description: Sequelize.TEXT,
  stock: Sequelize.INTEGER
});

module.exports = Rocks;
