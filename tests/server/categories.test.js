const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Category = require('APP/db/models/category')
const app = require('APP/server/start')

const utilCategory = {
  name: "Utility"
}

describe('/api/categories', () => {

  describe('POST /api/categories/addCategory', () => {
    it('succeeds with a valid enum category value', () =>
      request(app)
        .post('/api/categories/addCategory')
        .send(utilCategory)
        .expect(201)
      )

    // it('fails with an invalid enum category value', () =>
    //   request(app)
    //     .post('/api/auth/local/login')
    //     .send({name: 'wrong'})
    //     .expect(404)
    //   )
  })

})
