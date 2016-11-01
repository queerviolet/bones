'use strict'

const epilogue = require('APP/server/epilogue')
const db = require('APP/db')

const customProductRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customProductRoutes

// Epilogue will automatically create standard RESTful routes
const products = [{id:1}, {id:2}, {id:3}]

customProductRoutes.get('/', (req, res) => {
	res.send(products)
})

customProductRoutes.get('/:id', (req, res) => {
	res.send(products[req.params.id])
})