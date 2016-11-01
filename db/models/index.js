'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./userModel')
const Category = require('./categoryModel')
const Cart = require('./cartModel')
const Order = require('./orderModel')
const Product = require('./productModel')
const ProductReview = require('./productReviewModel')

// Associations for db Models

// User Associations
User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Product);
Product.belongsTo(User); // seller/owner

User.hasMany(ProductReview);
ProductReview.belongsTo(User);

// Category Associations
Category.hasMany(Product);
Product.belongsToMany(Category, { through: 'ProductCategory'});

// Cart Associations

// Order Associations

// Product Associations
Product.hasMany(ProductReview);
ProductReview.belongsTo(Product);

// Product Review Associations

module.exports = { 
    User,
    Category,
    Cart,
    Order,
    Product,
    ProductReview
}
