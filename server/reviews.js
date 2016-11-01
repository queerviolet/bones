import db from 'APP/db';
import express from 'express';
import Review from 'APP/db/models/product'

const router = express.Router();

router.get('/', (req, res, next) => {
  Review.findAll()
  .then(reviews =>{
    res.json(reviews)
  })
  .catch(next)
})


module.exports = router
