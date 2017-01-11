const db = require('APP/db');
const { expect } = require('chai');
const app = require('APP/server/start');
const Rock = require('APP/db/models/rock');
const request = require('supertest-as-promised');

const chrisRock = {
  name: 'chris',
  price: 999,
  weight: 1.99,
  color: 'black',
  description: 'This Rock is funny and loveable. It also sounds like the voice of an animated donkey',
  stock: 1
};

const kidRock = {
  name: 'kid',
  price: 499,
  weight: 1.49,
  color: 'white',
  description: 'This Rock makes a lot of noise and has some pretty racey opinions',
  stock: 1
};

describe('/api/rocks', () => {

  before('create a rock', () =>
    db.didSync
      .then(() => Rock.create(chrisRock))
      .then(() => Rock.create(kidRock))
  );

  describe('GET all rocks', () => {
    it('returns all the rocks', () =>
      request(app)
        .get('/api/rocks')
        .then(res => {
          expect(res.body.length).to.equal(2);
          res.body.forEach(rock => {
            expect(
              typeof rock.name &&
              typeof rock.description &&
              typeof rock.color)
              .to.equal('string');
            expect(
              typeof rock.price &&
              typeof rock.stock &&
              typeof rock.weight)
              .to.equal('number');
          });
        })
    );
  });

  describe('GET one rock', () => {
    it('returns one rock', () =>
      request(app)
        .get('/api/rocks/1')
        .then(res => {
          expect(res.body.name).to.equal('chris');
          expect(typeof res.body).to.equal('object');
        })
      );
  });

  describe('POST', () => {
    it('creates a new rock', () =>
      request(app)
        .post('/api/rocks/addRock')
        .send({
          name: 'The Rock',
          price: 299,
          weight: 4.99,
          color: 'brown',
          description: 'This Rock is strong and sturdy.',
          stock: 1
        })
        .then(res => {
          expect(res.body.name).to.equal('The Rock');
        })
      );
  });

  xdescribe('PUT', () => {
    it('edits a tag', () =>
      request(app)
        .put('/api/tags/edit/1')
        .send({ name: 'chris' })
        .then(res => {
          expect(res.body).to.contain({ name: 'chris' });
        })
      );
  });

});
