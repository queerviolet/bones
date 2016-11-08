'use strict'

const bcrypt = require('bcrypt-nodejs')
const Sequelize = require('sequelize')
const db = require('APP/db')
const addressModel = db.model('addresses');
const creditCardModel = db.model('creditCards');

const User = db.define('users', {
	first_name: { type: Sequelize.STRING,	allowNull: false },
	last_name: { type: Sequelize.STRING,	allowNull: false },
	email: { 
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
			notEmpty: true,
		},
	isAdmin: {
		type: Sequelize.BOOLEAN,
		defaultValue: false
		}
	},

	// We support oauth, so users may or may not have passwords.
	password_digest: Sequelize.STRING,
	password: Sequelize.VIRTUAL
}, {
	indexes: [{fields: ['email'], unique: true,}],
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
	},
	classMethods: {
		getUserAccount(userId) {
			return User.findOne({
				where: {
					id: userId
				},
				include: [
				{ model: addressModel, as: 'shipping_address', required: false },
				{ model: addressModel, as: 'billing_address', required: false },
				{ model: creditCardModel, required: false }
				]
			})
		}
	}
})

function setEmailAndPassword(user) {
	user.email = user.email && user.email.toLowerCase()
	if (!user.password) return Promise.resolve(user)

	return new Promise((resolve, reject) =>
		bcrypt.hash(user.get('password'), null, null, (err, hash) => {
			if (err) reject(err)
			user.set('password_digest', hash)
			resolve(user)
		})
	)
}

module.exports = User