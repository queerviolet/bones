'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Celeb = db.define('users', {
  name: Sequelize.STRING,
  type: Sequelize.STRING,
  list: Sequelize.STRING,
  rarity: Sequelize.INTEGER,
  alive: Sequelize.Boolean,
})


module.exports = Celeb
