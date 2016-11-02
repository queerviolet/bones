'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');
const ProductTable = require('./productModel');

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('incomplete', 'complete'),
        defaultValue: 'incomplete'
    },
    address: Sequelize.STRING,

}//,{
  // classMethods: {
  //   sendOrder: (cart, address) => {
  //     return Order.cartCost(cart)
  //       .then(totalCost => {
  //         var status = 'incomplete';
  //         var items = cart;
  //         Order.create({
  //           status, items, totalCost, address
  //         });
  //       });
  //   },
  //   cartCost: (cart) => {
  //     var totalCost = 0;
  //     var costArr = [];
  //     for (var i = 0; i < cart.length; i ++) {
  //       // var id = cart[i][0];
  //       // var prodQty = cart[i][1];
  //       costArr.push(productModel.findOne({
  //         where: {
  //           id
  //         }
  //       }));
  //     }
  //     return Promise.all([costArr])
  //     .then(res => {
  //       for (var i = 0; i < res.length; i++) {
  //         totalCost+= res[i] * car[i][1];
  //       }
  //       return totalCost;
  //     });
  //
  //   }
  // }
// }
);

// CLASS method that handles the entire order.
    // will take a cart as input and add a new row to the table.

//order belongsto user
// order hasmany product??
module.exports = Order;
