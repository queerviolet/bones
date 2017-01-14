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
router.post('/user/:userId/rock/:rockId', (req, res, next) => {
  Order.findOrCreate({
    where: {
      user_id: req.params.userId,
      status: 'in-cart'
    },
    include: [CartProduct]
  })
  .then(order => {
    // res.json(order)
    console.log('here is the order', order[0].id)
    CartProduct.findOne({
      where:{
        order_id: order[0].id,
        rock_id: req.params.rockId
      }
    })
    .then(cartProduct => {
      console.log(cartProduct)
      // res.json(cartProduct)

      if(cartProduct) {
        let incrementQuantity = cartProduct.quantity + 1;
        console.log(incrementQuantity)
        return cartProduct.update({
          quantity: incrementQuantity
        })
        .then(foundProducts => {
          res.json(foundProducts)
        })
      } else {
          return CartProduct.create({
            order_id: order[0].id,
            rock_id: 1,
            quantity: 1
          })
          .then(cartProducts => {
            res.json(cartProducts)
          })
      }

    })


  })
  .catch(next);

  // CartProduct.create({
  //   order_id: req.body.orderId,
  //   rock_id: req.body.productId,
  //   quantity: req.body.quanity
  // }).
  //   then(newCartProduct => {
  //     res.status(201).send(newCartProduct);
  //   })
  //   .catch(next);
});

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
