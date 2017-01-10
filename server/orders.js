/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Order = db.model('orders');

const { selfOnly, mustBeLoggedIn, forbidden } = require('./auth.filters');


const router = require('express').Router();

//*TODO make this route only accessible to admins!
// get all the orders
router.get('/', (req, res, next) => {
  Order.findAll()
    .then(orders => res.json(orders))
    .catch(next);
});

//*TODO this is not finished...
//get a single order
router.get('/:id', (req, res, next) => {
  Order.findAll({
    where: { id: req.params.id }
  })
    .then(orders => res.json(orders))
    .catch(next);
});

module.exports = router;
