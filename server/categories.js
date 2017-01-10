
'use strict';

const db = require('APP/db');
const Tag = db.model('tags');
const Rock = db.model('rocks');
const Review = db.model('reviews');
const Category = db.model('categories');


const router = require('express').Router();

// get all the categories and respective rocks
router.get('/', (req, res, next) => {
  Category.findAll({ include: [Rock] })
    .then(categories => res.json(categories))
    .catch(next);
});

// get a single category
router.get('/:id', (req, res, next) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Rock]
  })
    .then(category => res.json(category))
    .catch(next);
});

module.exports = router;
