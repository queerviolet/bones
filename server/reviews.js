import db from 'APP/db';
import express from 'express';
import Review from 'APP/db/models/product'

const router = express.Router();

router.get('/', (req, res, next) => {
  Review.findAll()
  .then(reviews =>{
    res.json(reviews);
  })
  .catch(next)
})

router.get('/:productId', (req, res, next) => {
  Review.findAll({where: {product_id: req.params.productId}})
  .then(reviews => {
    res.json(reviews);
  })
  .catch(next)
})

router.get('/users/:userId', (req, res, next) => {
  Review.findAll({where: {user_id: req.params.userId}})
  .then(reviews => {
    res.json(reviews);
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Review.create(req.body)
  .then( review => {
    res.status(200).send('review created')
  })
  .catch(next)
})

router.put('/:reviewId', (req, res, next) => {
  Review.update({req.body}, {where: {id: req.params.reviewId}})
  .then( review => {
    res.status(204).send('review updated')
  })
})

router.delete('/:reviewId', (req, res, next) => {
  Review.destroy({where: {id: req.params.reviewId}})
  .then(() => {
    res.send();
  })
})




module.exports = router
