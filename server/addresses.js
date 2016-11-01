'use strict'

const epilogue = require('./epilogue')
const db = require('APP/db')

const customAddressesRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customAddressesRoutes

// Epilogue will automatically create standard RESTful routes
const addresses = [{id:1}, {id:2}, {id:3}]

customAddressesRoutes.get('/:id', (req, res) => {
	res.send(addresses[req.params.id])
})

customAddressesRoutes.post('/', (req, res) => {
	res.send("new address")
})