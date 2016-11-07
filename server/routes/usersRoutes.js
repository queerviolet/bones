'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router()

// Custom routes go here.
customUserRoutes.post('/', (req, res, next) => {
  db.model('users').create(req.body)
    .then(resp => {
      res.json(resp);
    })
    .catch(err => console.error(err));
});

module.exports = customUserRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id'],
  actions: ['list','read','delete']
})

// find all users
users.list = (req, res, context) => {
  res.status(201).json(context)
}

// get details about one user
users.read = (req, res, context) => {
  const userId = req.params.id;
  const user = context.find(user => user.id === userId);
  res.status(201).json(user);
}

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly)
//users.list.auth(forbidden)
//users.read.auth(mustBeLoggedIn)
