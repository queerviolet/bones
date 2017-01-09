'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const Rocks = require('./rocks');
const Reviews = require('./reviews');
const Addresses = require('./addresses');



module.exports = {User, Rocks, Reviews, Addresses};
