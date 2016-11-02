'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true,}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/celebs', require('./celebs'))
  .use('/reviews', require('./reviews'))

// Send along any errors
api.use((err, req, res, next) => {
  // res.status(500).send(err) //originally here
    res.status(err.status || 500);
    console.error(err.stack);
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
