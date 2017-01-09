'use strict';

const Sequelize = require('sequelize');
const db = require('APP/db');

const Categories = db.define('categories', {
  name: Sequelize.ENUM('Companion', 'Utility', 'Decorative', 'Miscellaneous')
});

module.exports = Categories;
