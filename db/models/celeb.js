'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Celeb = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: Sequelize.STRING,
  list: Sequelize.STRING,
  rarity: Sequelize.INTEGER,
  alive: {
    type: Sequelize.Boolean,
    allowNull: false
  },
})


module.exports = Celeb
