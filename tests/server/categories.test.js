const db = require('APP/db');
const { expect } = require('chai');
const app = require('APP/server/start');
const request = require('supertest-as-promised');
const Category = require('APP/db/models/category');

const utilCategory = {
  name: 'Utility'
};

const compCategory = {
  name: 'Companion'
};

describe('/api/categories', () => {

  before('create a category', () =>
    db.didSync
      .then(() => Category.create(utilCategory))
      .then(() => Category.create(compCategory))
  );

  describe('GET all the categories', () => {
    it('returns all the categories', () =>
      request(app)
        .get('/api/categories')
        .then(res => {
          expect(res.body.length).to.equal(2);
          expect(res.body[0]).to.contain(utilCategory);
        })
      );
  });

  describe('GET a single categories', () => {
    it('returns one category', () =>
      request(app)
        .get('/api/categories/1')
        .then(res => {
          expect(res.body.name).to.equal('Utility');
        })
      );
  });

  describe('POST a new category', () => {
    it('adds a new category', () =>
      request(app)
        .post('/api/categories/addCategory')
        .send({ name: 'Decorative' })
        .then(res => {
          expect(res.body).to.contain({ name: 'Decorative' });
        })
      );
  });

  describe('PUT', () => {
    it('edits a category', () =>
      request(app)
        .put('/api/categories/edit/1')
        .send({ name: 'Decorative' })
        .then(res => {
          expect(res.body).to.contain({ name: 'Decorative' });
        })
      );
  });

});
