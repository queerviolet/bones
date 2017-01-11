const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Tag = require('APP/db/models/tag');
const app = require('APP/server/start');

describe('/api/tags', () => {

  describe('tag', () => {
    it('POST creates a tag', () =>
      request(app)
        .post('/api/tags/addTag')
        .send({
          name: 'friendly'
        })
        .expect(201)
    );
  });
});


// it('GET /:id fails 401 (Unauthorized)', () =>
//   request(app)
//     .get(`/api/tags/1`)
//     .expect()
// );

// it('POST redirects to the user it just made', () =>
//   request(app)
//     .post('/api/users')
//     .send({
//       email: 'eve@interloper.com',
//       password: '23456',
//     })
//     .redirects(1)
//     .then(res => expect(res.body).to.contain({
//       email: 'eve@interloper.com'
//     }))
// );
