
'use strict';

const db = require('APP/db');
const Tag = db.model('tags');
const Rock = db.model('rocks');
const Review = db.model('reviews');
const Category = db.model('categories');


const router = require('express').Router();

// get all the tags and the associated rocks
router.get('/', (req, res, next) => {
  Tag.findAll({ include: [Rock] })
    .then(tags => res.json(tags))
    .catch(next);
});

// get a single tag and all respective rocks
router.get('/:id', (req, res, next) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: [Rock]
  })
    .then(tag => res.json(tag))
    .catch(next);
});

module.exports = router;
