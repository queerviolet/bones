const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Product = require('APP/db/models/product')
const app = require('./start')

describe('/api/products', () => {

  const products = [
          {
            name: 'Grandfather\'s gold watch',
            quantity: 1, 
            description: 'Brad\'s grandfather gave this watch to Brad on his deathbed. Soooooo sad :(' ,
            price: 3000000,
            categories: ['shiny', 'tragic'],
            photoURL: 'http://luxurylaunches.com/wp-content/uploads/2012/11/pharrells-gshock-gold-watch.jpg'
          },
          {
            name: 'Dog collar',
            quantity: 4, 
            description: 'Angie wore these around her wrists and ankles at a naughty party one night' ,
            price: 1000,
            categories: ['pointy', 'tight'],
            photoURL: 'http://luxurylaunches.com/wp-content/uploads/2012/11/pharrells-gshock-gold-watch.jpg'
          }   
  ]

  const [watch, dogCollar] = products

  const celebs = [
    {
      name: 'Angelina Jolie',
      celebType: 'Movie star',
      alive: true
    },
    {
      name: 'Brad Pitt',
      celebType: 'Movie star',
      alive: true
    }
  ]

  const [angelia, brad] = celebs

  before('sync database & make products', () =>
    db.didSync
      .then(() => Product.destroy({truncate: true}))
      .then(() => products.map(
        product => Product.create(product)))
  )


  it('GET / lists all products', () =>
    request(app)
      .get(`/api/products`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(products.length)
      })
  )

  // Uncheck this spec and get it to pass
  xit('**Fix this with understanding of join tables** GET / lists all products by celeb\'s id', () =>
    request(app)
      .get(`/api/products?name=angelina+jolie`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(products.length)
        const [
          gotWatch,
          gotdogCollar ] = res.body
        expect(gotWatch).to.contain(watch)
      })
  )

  it('POST / creates a product', () =>
      request(app)
        .post('/api/products')
        .send({
          name: 'Eyebrow hairs',
          price: 300,
          quantity: 6,
          description: 'I got these from my friend who threaded Jen\'s brows before the Emmy\'s in 2001'
        })
        .expect(201)
  )

  it('PUT / updates a product', () =>
      request(app)
        .put('/api/products/10')
        .send({ quantity: 2 })
        .expect(201)
  )

  it('DELETE / deletes a product', () =>
      request(app)
        .delete('/api/products/2')
        .expect(200)
  )
})