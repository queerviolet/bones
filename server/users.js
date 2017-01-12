/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const User = db.model('users');

const {mustBeLoggedIn, forbidden} = require('./auth.filters');

module.exports = require('express').Router()
	.get('/', forbidden('only admins can list users'), (req, res, next) =>
		User.findAll()
		.then(users => res.json(users))
		.catch(next))
	.post('/', (req, res, next) =>
		User.create(req.body)
		.then(user => res.status(201).json(user))
		.catch(next))
  .post('/login', (req, res, next) =>
    User.findOne( {where: {email: req.body.email}
  })
    .then(user => {
      if (user.authenticate(req.body.password)) {
        res.status(201).send(user);
      } else {
        res.status(404).send({err: 'Unable to login'});
      }
    })
    .catch(next))
	.get('/:id', mustBeLoggedIn, (req, res, next) =>
		User.findById(req.params.id)
		.then(user => res.json(user))
		.catch(next))
	.put('/edit/:id', (req, res, next) => {
		User.update(req.body, { where: { id: req.params.id }, returning: true
  })
		.then(updatedUser => {
      res.status(204).send(updatedUser[1][0].dataValues);
    })
    .catch(next);
});
