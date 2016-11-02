const Celeb = require('APP/db/models/celeb');
const Product = require('APP/db/models/product');
const router = require('express').Router();

router.get('/', (req, res, next) =>
  Celeb.findAll()
  .then(celebs => res.send(celebs))
  .catch(next)
  )

router.post('/', (req,res,next) =>
  Celeb.create(req.body)
  .then(createdCeleb => res.status(201).send(createdCeleb))
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
  .catch(next)
  )

router.put('/:celebId', (req,res,next) =>
  Celeb.update(req.body, {
    where: {
      id: req.params.celebId
    }
  })
  .then(updatedCeleb => res.send(updatedCeleb))
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
