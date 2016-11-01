'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customCartsRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customCartsRoutes

// Epilogue will automatically create standard RESTful routes
const carts = [{id:1}, {id:2}, {id:3}]

customCartsRoutes.get('/:id', (req, res) => {
	res.send(carts[req.params.id])
})

// delete cart info after order
customCartsRoutes.delete('/:id', (req, res) => {
	res.status(204).send()
})

// add items to cart
customCartsRoutes.post('/:id/:productId', (req, res) => {
	res.send('add')
})

// remove
customCartsRoutes.delete('/:id/:productId', (req, res) => {
	res.status(204).send()
})

// update quantity (min 1)
customCartsRoutes.put('/:id/:productId', (req, res) => {
	res.send()
})

