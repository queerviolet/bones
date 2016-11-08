'use strict'

const Sequelize = require('sequelize');
const db = require('APP/db');

const ProductReview = db.define('productReview', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            len: [10, 500]
        }
    },
    numStars: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    }
});



// productReviews belongsto user
// productReviews belongsto product
//

module.exports = ProductReview;
