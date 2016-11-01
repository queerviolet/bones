const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Review = require('APP/db/models/review');
const app = require('./start');

describe('/api/reviews', () => {
  const reviews = [
          {
            stars: 3,
            text: 'It was the worst thing EVER.'
          },
          {
            stars: 4,
            text: 'I loved so much I would marry it if such things were permitted legally!'
          },
          {
            stars: 0,
            text: 'It was okay, I guess. Not reall what I expected given the images'
          }
  ]
  const [three, four, zero]
    = reviews

  before('sync database & make products', () =>
    db.didSync
      .then(() => Review.destroy({where:{}}))
      .then(() => reviews.map(
        product => Review.create(product)
      ))
  )


  it('GET / lists all products', () =>
    request(app)
      .get(`/api/products`)
      .expect(200)
      .then(res => {
        expect(res.body).to.have.length(reviews.length)
        const [
          gotThree,
          gotFour,
          gotZero ] = res.body
        expect(gotThree).to.contain(three)
        expect(gotFour).to.contain(four)
        expect(gotZero).to.contain(zero)
      })
  )

  xit('POST / creates a product', () =>
      request(app)
        .post('/api/products')
        .send({
          name: 'Curious Staircase',
          price: 1e6
        })
        .expect(201)
  )
})
