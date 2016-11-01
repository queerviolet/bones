'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Celeb = db.define('celebs', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  celebType: Sequelize.STRING,
  list: Sequelize.STRING,
  rarity: Sequelize.INTEGER,
  alive: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
})


module.exports = Celeb
