'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')

const customCategoryRoutes = require('express').Router()

// Custom routes go here.

module.exports = customCategoryRoutes

// Epilogue will automatically create standard RESTful routes
const category = epilogue.resource({
  model: db.model('category'),
  endpoints: ['/category', '/category/:id']
})

// find all users
category.list = (req, res, context) => {
  res.status(201).json(context)
}

// get details about one user
category.read = (req, res, context) => {
  const categoryId = req.params.id;
  aCategory = context.find(category => category.id === categoryId);
  res.status(201).json(aCategory);
}

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
category.delete.auth(mustBeLoggedIn)
category.delete.auth(selfOnly)
//category.list.auth(forbidden)
//category.read.auth(mustBeLoggedIn)
