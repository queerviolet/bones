const Celeb = require('APP/db/models/celeb');
const Product = require('APP/db/models/product');

const router = require('express').Router();

router.get('/', (req, res, next) =>
  Celeb.findAll()
  .then(celebs => res.send(celebs))
  .catch(next)
  )

router.post('/', (req,res,next) =>
  Celeb.findOrCreate(req.body)
  .spread((celeb,wasCreatedBool) => {
    if (wasCreatedBool) res.send(celeb)
    else res.send({message: "Celebrity could not be added."})
  })
  .catch(next)
  )

router.get('/:celebId', (req,res,next) =>
  Celeb.findAll({
    where: {
      id: req.params.celebId
    },
    include: {
      model: Product
    }

  })
  .then(foundProdsByCeleb => res.send(foundProdsByCeleb))
  // .then(foundEntries => {
  //   return foundEntries.map( entry => {
  //     Product.findById(entry.productId)
  //   })
  // .then(foundProdsByCeleb => res.send(foundProdsByCeleb))
  .catch(next)
  )

router.put('/:celebId', (req,res,next) =>
  Celeb.update(req.body, {
    where: {
      id: req.params.celebId
    }
  })
  .then(foundCelebs => res.send(foundCelebs))
  .catch(next)
  )

router.delete('/:celebId', (req,res,next) =>
  Celeb.destroy({
    where:{
      id: req.params.celebId
    }
  })
  .then(destroyedCeleb => res.send({message: "Celebrity has been deleted"}))
  .catch(next)
  )

 module.exports = router;
