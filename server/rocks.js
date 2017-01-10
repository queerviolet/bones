/*eslint-disable new-cap */
'use strict';

const db = require('APP/db');
const Tag = db.model('tags');
const Rock = db.model('rocks');
const Review = db.model('reviews');
const Category = db.model('categories');


const router = require('express').Router();

// get all the rocks and the associated tags, reviews & categories
router.get('/', (req, res, next) => {
  Rock.findAll({ include: [Tag, Review, Category] })
    .then(rocks => res.json(rocks))
    .catch(next);
});

// get a single rock
router.get('/:id', (req, res, next) => {
  Rock.findOne({
    where: { id: req.params.id },
    include: [Tag, Review, Category]
  })
    .then(rock => res.json(rock))
    .catch(next);
});

module.exports = router;
