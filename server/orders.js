/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Order = db.model('orders');
const User = db.model('users');
const CartProduct = db.model('cartProducts');
const Address = db.model('addresses');
const Rocks = db.model('rocks');

// const { selfOnly, mustBeLoggedIn, forbidden } = require('./auth.filters');

const router = require('express').Router();


// Get all the orders
router.get('/', (req, res, next) => {
  Order.findAll( { include: [User, CartProduct, Address] } )
    .then(orders => {
      res.send(orders);
    })
    .catch(next);
});

// Get a single order by order id
router.get('/:id', (req, res, next) => {
  Order.findOne({
    where: { id: req.params.id },
    include: [User, CartProduct, Address]
  })
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

// Edit an order
router.put('/edit/:id', (req, res, next) => {
  Order.findOne({
    where: { id: req.params.id }
  })
    .then(order => order.update(req.body))
    .then(updatedOrder => res.status(204).send(updatedOrder))
    .catch(next);
  // Order.update(req.body, { where: { id: req.params.id }, returning: true
  // })
  //   .then(updatedOrder => {
  //     // console.log(updatedOrder[1][0].dataValues)
  //     res.status(204).send(updatedOrder[1][0].dataValues);
  //   })
  //   .catch(next);
});

// Checkout a shopping cart
 // router.put('/checkout/:userId', (req, res, next) => {

 //    let newUserData, newAddressData, newOrderData ;

 //    if (req.params.userId === 'undefined') {
 //      User.create(req.body)
 //        .then(newUser => {
 //          newUserData = newUser;
 //        })
 //        .then(() => {
 //          return Address.create(req.body)
 //          .then(newAddress => {
 //            newAddressData = newAddress;
 //          })
 //        })
 //        .then(() => {
 //           return Order.update(
 //            {
 //              user_id: newUserData.id,
 //              address_id: newAddressData.id
 //              status: "processing"
 //            },
 //            {
 //              status: 'in-cart',
 //              where:{sessionId: req.session.id}
 //            })

 //        })
 //        .then(order => {
 //          res.status(200).send(order);
 //        })
 //        .catch(next)
 //    } else {

 //        return Order.update(
 //        {
 //          status: "processing"
 //        },
 //        {
 //          status: 'in-cart',
 //          where:{user_id: req.params.userId}
 //        })
 //        .then(order => {

 //          newOrderData = order;

 //          return Address.update(
 //          {
 //            street: req.body.street,
 //            city: req.body.city,
 //            state: req.body.state,
 //            zipcode: req.body.zipcode
 //          },
 //          {
 //            where: {id: order.address_id}
 //          })
 //        })
 //        .then(address => {
 //          newAddressData = address;
 //          res.json({newOrderData, newAddressData})
 //        })
 //        .catch(next);

 //      }

 // })

 router.put('/checkout/:userId', (req, res, next) => {

    let affectedOrderData;

    if (req.params.userId === 'undefined') {
      let newUserData;
      User.create(req.body)
      .then(newUser => {
          newUserData = newUser;
          return Address.create(req.body)
        })
        .then(newAddress => {
           return Order.update(
            {
              user_id: newUserData.id,
              address_id: newAddress.id,
              status: "processing"
            },
            {
              where:{
                sessionId: req.session.id,
                status: 'in-cart'
              }, returning: true
            })
        })
        .then(affectedOrder => {
          res.send(affectedOrder[1][0]);
        })
        .catch(next)

    } else {
        Order.update(
        {
          status: "processing"
        },
        {
          where:{
            user_id: req.params.userId,
            status: 'in-cart'
          }, returning: true
        })
        .then(affectedOrder => {
          affectedOrderData = affectedOrder;
          return Address.update(
          {
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode
          },
          {
            where: {user_id: req.params.userId},
            returning: true
          })
        })
        .then(affectedAddressArr => {

          res.send(affectedOrderData[1]);
        })
        .catch(next);
    }

 })
module.exports = router;
