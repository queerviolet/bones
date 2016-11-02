'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')

const customProductRoutes = require('express').Router()

// Custom routes go here.

module.exports = customProductRoutes

// Epilogue will automatically create standard RESTful routes
const product = epilogue.resource({
  model: db.model('product'),
  endpoints: ['/product', '/product/:id'],
  search: {
    param: 'productTitle',
    attributes: ['title']
  }
})

// find all users
product.list = (req, res, context) => {
  res.status(201).json(context)
}

// get details about one user
product.read = (req, res, context) => {
  const productId = req.params.id;
  aProduct = context.find(product => product.id === productId);
  res.status(201).json(aProduct);
}

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
product.delete.auth(mustBeLoggedIn)
product.delete.auth(selfOnly)
//product.list.auth(forbidden)
//product.read.auth(mustBeLoggedIn)


//const customProductRoutes = require('express').
