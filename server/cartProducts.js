/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const User = db.model('users');
const Order = db.model('orders');
const CartProduct = db.model('cartProducts');
const Rock = db.model('rocks');
const router = require('express').Router();


// Get all rocks pertaining to an order
router.get('/:orderId', (req, res, next) => {
  CartProduct.findAll({
    where: {order_id:req.params.orderId},
    include: [Rock]
  })
    .then(cartProducts => {
      res.send(cartProducts);
    })
    .catch(next);
});

// Add product to existing shopping cart
// Pass in req.body.rockQuantity. If rockQuanity is not set, it will be set to 1 by default.
router.post('/user/:userId/rock/:rockId', (req, res, next) => {
  // Find the shopping cart of the user. If the shopping cart doesn't exist, create one
  Order.findOrCreate({
    where: {
      user_id: req.params.userId,
      status: 'in-cart'
    },
    include: [CartProduct]
  })
  .then(order => {
    // res.json(order)
    // Find the shopping car with matching order
    CartProduct.findOne({
      where:{
        order_id: order[0].id,
        rock_id: req.params.rockId
      }
    })
    .then(cartProduct => {
      let incrementQuantity, rockQuantity = req.body.rockQuantity;

      // If there is a shopping cart with the product, increment the quanity by 1
      if(cartProduct) {
        // Check if the req.body has specified exact number of rock quantity.
        // Add that number of rocks to the order
        if(rockQuantity) {
          incrementQuantity = rockQuantity
        } else {
          // If req.body doesn't specify rock quantity, just increment order quantity by one
          incrementQuantity = cartProduct.quantity + 1 ;
        }

        return cartProduct.update({
          quantity: incrementQuantity
        })
        .then(updatedProduct => {
          res.json(updatedProduct)
        })
      } else {

        // Check if the req.body has specified exact number of rock quantity.
        // Add that number of rocks to the order
        if(rockQuantity) {
          incrementQuantity = rockQuantity
        } else {
          // If req.body doesn't specify rock quantity, just set increment to 1
          incrementQuantity = 1;
        }

        // If the shopping cart doesn't have the product, add rock and quantity to the shopping cart
          return CartProduct.create({
            order_id: order[0].id,
            rock_id: req.params.rockId,
            quantity: incrementQuantity
          })
          .then(cartProducts => {
            res.json(cartProducts)
          })
      }

    })
    .catch(next);

  })
  .catch(next);
});

// Delete the whole shopping cart or order
router.delete('/user/:userId/order/:orderId', (req, res, next) => {
  Order.findOne({
    where: {
      user_id: req.params.userId,
      status: 'in-cart'
    },
    include: [CartProduct]
  })
  .then(order => {
    CartProduct.destroy({
      where: {order_id: req.params.orderId}
    })
    res.sendStatus(200);

  });
});

// Delete particular rock from the order
router.delete('/user/:userId/order/:orderId/rock/:rockId', (req, res, next) => {
  Order.findOne({
    where: {
      user_id: req.params.userId,
      status: 'in-cart'
    },
    include: [CartProduct]
  })
  .then(order => {
    CartProduct.destroy({
      where: {
        order_id: req.params.orderId,
        rock_id: req.params.rockId
      }
    })
    res.sendStatus(200);

  });
})
// router.put('/edit/:id', (req, res, next) => {
//   Order.findOne({
//     where: { id: req.params.id }
//   })
//     .then(order => order.update(req.body))
//     .then(updatedOrder => res.status(204).send(updatedOrder))
//     .catch(next);
//   // Order.update(req.body, { where: { id: req.params.id }, returning: true
//   // })
//   //   .then(updatedOrder => {
//   //     // console.log(updatedOrder[1][0].dataValues)
//   //     res.status(204).send(updatedOrder[1][0].dataValues);
//   //   })
//   //   .catch(next);
// });

module.exports = router;
