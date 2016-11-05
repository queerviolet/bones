'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./routes/usersRoutes'))
  .use('/category', require('./routes/categoryRoutes'))
  .use('/product', require('./routes/productRoutes'))
  .use('/orders', require('./routes/orderRoutes'))


  // un comment these lines when the cart route and order route are set up
  //.use('/cart', require('./routes/cartRoutes'))
  //.use('/order', require('./routes/orderRoutes'))


// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
