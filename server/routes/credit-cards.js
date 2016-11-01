'use strict'

const epilogue = require('APP/server/epilogue')
const db = require('APP/db')

const customCreditCardsRoutes = require('express').Router() 

// Custom routes go here.

module.exports = customCreditCardsRoutes

// Epilogue will automatically create standard RESTful routes
const creditcards = [{id:1}, {id:2}, {id:3}]

customCreditCardsRoutes.get('/:id', (req, res) => {
	res.send(creditcards[req.params.id])
})

customCreditCardsRoutes.post('/', (req, res) => {
	res.send("new credit card")
})