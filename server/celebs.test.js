const request = require('supertest-as-promised')
 const {expect} = require('chai')
 const db = require('APP/db')
 const Celeb = require('APP/db/models/celeb')
 const app = require('./start')

 describe('/api/celebs', () => {
  const celebs = [
    {
      name: "Emma Stone",
      list: "A"
      alive: true
    },
    {
      name: 'Elizabeth Taylor',
      list: "A"
      alive: false
    },
    {
      name: 'Mickey Rourke',
      list: "D"
      alive: true
    }
   ]
   const [emma,liz,mickey] = celebs;

   const products = [
   {
      name: "Mary Jane outfit",
      price: 10.00,
      categories: ["Comics", "Clothing" ]
    },
    {
      name: "Giant Diamond Ring",
      price: 30000.00,
      categories: ["Jewelry"]
    },
    {
      name: "Leather vest",
      price: 300.00,
      categories: ["Clothing"]
    }
   ]

   before('sync database & make products', () =>{
     let id = 1;
     db.didSync
       .then(() => Celeb.destroy({truncate: true}))
       .then(() => celebs.map(
         celeb => Celeb.create(celeb)))
       .then(() => return products.map(
         product => Product.create(product)))
       .then( createdProducts => createdProducts.map(
         product => {
          product.setCelebs(celebId: id)
          id++
          }))
   })

   it('GET / lists all celebrities', () =>
     request(app)
       .get(`/api/celebs`)
       .expect(200)
       .then(res => {
         expect(res.body).to.have.length(celebs.length)
         const [
           gotEmma,
           gotLiz,
           gotMickey ] = res.body
         expect(gotEmma).to.contain(emma)
         expect(gotLiz).to.contain(liz)
         expect(gotMickey).to.contain(mickey)
       })
   )

   it('POST / adds a new celebrity', () =>
       request(app)
         .post('/api/celebs')
         .send({
           name: "Thandie Newton"
           list: "A"
           alive: true
         })
         .expect(201)
   )

   it('GET /:celebId lists all products by celebrity id', () =>
     request(app)
       .get(`/api/celebs/1`)
       .expect(200)
       .then(res => {
         expect(res.body).to.have.length(1)
         expect(res.body).to.contain({
            name: "Mary Jane outfit",
            price: 10.00,
            categories: ["Comics", "Clothing" ]
         })
       })
   )

  it('PUT /:celebId updates an existing celebrity', () =>
       request(app)
         .put('/api/celebs/1')
         .send({
           name: "Emma Stone-Gosling"
           list: "B"
           alive: true
         })
         .then(res => {
            expect(res.status).to.eql(200);
            expect(res.body).to.contain({
              name: "Emma Stone-Gosling"
              list: "B"
              alive: true
            })
         })
   )

  it('DELETE /:celebId deletes a celebrity', () =>
    request(app)
       .delete('/api/celebs/:celebId')
       .send({
         name: "Thandie Newton"
         list: "A"
         alive: true
       })
       .expect(201)
 )

 })
