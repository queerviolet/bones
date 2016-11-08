'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
    unique: true
  },
  username: Sequelize.STRING,
  addresses: Sequelize.ARRAY(Sequelize.STRING),
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },

  // We support oauth, so users may or may not have passwords.
  password_digest: Sequelize.STRING,
  password: Sequelize.VIRTUAL // only exists right before a user is created
}, {
    indexes: [{ fields: ['email'], unique: true, }],
    hooks: {
      beforeCreate: setEmailAndPassword,
      beforeUpdate: setEmailAndPassword,
    },
    instanceMethods: {
      authenticate(plaintext) {
        return new Promise((resolve, reject) =>
          bcrypt.compare(plaintext, this.password_digest,
            (err, result) =>
              err ? reject(err) : resolve(result))
        )
      }
    }
  })

function setEmailAndPassword(user) {
  user.email = user.email && user.email.toLowerCase()
  if (!user.password) return Promise.resolve(user)

  return new Promise((resolve, reject) =>
    bcrypt.hash(user.get('password'), 10, (err, hash) => {
      if (err) reject(err)
      user.set('password_digest', hash)
      resolve(user)
    })
  )
}

module.exports = User
