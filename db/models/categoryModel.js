'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

// class method to add category -- NOT RIGHT NOW.

module.exports = Category;
