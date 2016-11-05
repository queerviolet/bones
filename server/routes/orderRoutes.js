'use strict'

const epilogue = require('../epilogue');
const db = require('APP/db');

const customOrderRoutes = require('express').Router();

// Insert custom routes here if needed
customOrderRoutes.get('/', (req, res, next) => {
    db.model('order').findAll({
        include: [
            {all: true}
        ]
    })
    .then(orders => res.status(201).json(orders))
    .catch(err => console.log('Invalid db search for orders!', err));
})

customOrderRoutes.get('/:id', (req, res, next) => {
    db.model('order').findAll({
        where: {
            id: req.params.id
        },
        include: [
            {all: true}
        ]
    })
    .then(orders => res.status(201).json(orders))
    .catch(err => console.log('Invalid db search for orders!', err));
})

module.exports = customOrderRoutes;


