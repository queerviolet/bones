'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

// api
//   .get('/heartbeat', (req, res) => res.send({ok: true,}))
//   .use('/auth', require('./auth'))
//   .use('/users', require('./users'))

api.use('/products', require('./routes/products'))
api.use('/carts', require('./routes/carts'))
api.use('/orders', require('./routes/orders'))
api.use('/addresses', require('./routes/addresses'))
api.use('/credit-cards', require('./routes/credit-cards'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())