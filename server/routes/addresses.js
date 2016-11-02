'use strict'

const epilogue = require('APP/server/epilogue')
const db = require('APP/db')

const customAddressesRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customAddressesRoutes

// Epilogue will automatically create standard RESTful routes
const addresses = epilogue.resource({
    model: db.model('addresses'),
    endpoints: ['/addresses', '/addresses/:id']
})

customAddressesRoutes.post('/', (req, res) => {
	res.send("new address")
})

