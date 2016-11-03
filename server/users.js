'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router()

// Custom routes go here.

module.exports = customUserRoutes
const middle = {
  list: {
    write: {
      before: function(req, res, context) {
        // modify data before writing list data
        return context.continue;
      },
      action: function(req, res, context) {
        console.log("Middle",context.instance);

        return context.continue;
      },
      after: function(req, res, context) {
        // set some sort of flag after writing list data
        return context.continue;
      }
    }

    }

};

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id']
})

users.use(middle);

const {mustBeLoggedIn, selfOnly, forbidden, catcherr} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly('delete'));
//users.list.auth(forbidden('cannot list users'))
console.log("here", users.list.write.action);
//users.list.write.action();
users.read.auth(mustBeLoggedIn)