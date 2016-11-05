'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Address = require('./address');
const CartProduct = require('./cartProduct');
const CreditCard = require('./creditCard');
const LineItem = require('./lineItem');
const Order = require('./order');
const Review = require('./review');
const Product = require('./product');
const User = require('./user');


// Associations decided on the first day
// UserAdresses
User.belongsTo(Address, {as: 'shipping_address'});
User.belongsTo(Address, {as: 'billing_address'});

// UserCreditCards
CreditCard.belongsTo(User);
User.hasMany(CreditCard);

// UserOrders
Order.belongsTo(User);
User.hasMany(Order);

// OrderLineItems
LineItem.belongsTo(Order);
Order.hasMany(LineItem);

// other associations we need
// OrderAdresses
Order.belongsTo(Address, {as: 'shipping_address'});
Order.belongsTo(Address, {as: 'billing_address'});

// OrderCreditcards
Order.belongsTo(CreditCard);
CreditCard.hasOne(Order);

// LineItemsProduct
LineItem.belongsTo(Product);
Product.hasMany(LineItem);

// ReviewsProducts
Review.belongsTo(Product);
Product.hasMany(Review);

// UsersReviews
Review.belongsTo(User);
User.hasMany(Review);

// CartProducts
CartProduct.belongsTo(Product);

module.exports = {User, Product, Review, Order, LineItem, Address, CreditCard, CartProduct};
