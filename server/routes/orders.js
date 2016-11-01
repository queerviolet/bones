'use strict'

const epilogue = require('APP/server/epilogue')
const db = require('APP/db')

const customOrdersRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customOrdersRoutes

// Epilogue will automatically create standard RESTful routes
const orders = [{id:1}, {id:2}, {id:3}]

customOrdersRoutes.get('/:id', (req, res) => {
	res.send(orders[req.params.id])
})

customOrdersRoutes.post('/', (req, res) => {
	res.send("new order")
})