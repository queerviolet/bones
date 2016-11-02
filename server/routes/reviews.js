'use strict'

const epilogue = require('APP/server/epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customUserRoutes;

// Epilogue will automatically create standard RESTful routes
// const users = epilogue.resource({
//   model: db.model('reviews'),
//   endpoints: ['/reviews', '/reviews/:id']
// })

