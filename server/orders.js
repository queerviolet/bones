/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');
const CartProduct = db.model('cartProducts');
const Address = db.model('addresses');

const { selfOnly, mustBeLoggedIn, forbidden } = require('./auth.filters');


const router = require('express').Router();


//*TODO make this route only accessible to admins!
// get all the orders
router.get('/', (req, res, next) => {
  Order.findAll( { include: [User, CartProduct, Address] } )
    .then(orders => {
      res.send(orders);
    })
    .catch(next);
});

//*TODO this is not finished...
//get a single order
router.get('/:id', (req, res, next) => {
  Order.findById(req.params.id,
    { include: [User, CartProduct, Address] })
    .then(order => res.json(order))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(newOrder => {
      res.status(201).send(newOrder);
    })
    .catch(next);
});

router.put('/edit/:id', (req, res, next) => {
  Order.update(req.body, { where: { id: req.params.id }, returning: true
  })
    .then(updatedOrder => {
      res.status(204).send(updatedOrder[1][0].dataValues);
    })
    .catch(next);
});

module.exports = router;
