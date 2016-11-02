// 'use strict'

// const db = require('APP/db')
// const product = require('APP/db/models/product')
// const {expect} = require('chai')

// describe('product', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       product.create({ password: 'ok' })
//         .then(product => product.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       product.create({ password: 'ok' })
//         .then(product => product.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })

// var app = require('APP/server/api');
// var Promise = require('bluebird');
// var models = require('APP/db/models');
// var expect = require('chai').expect;
// var supertest = require('supertest');
// var agent = supertest.agent(app);
// var fs = require('fs');

// const db = require('APP/db');
// const Product = db.models.products;
// console.log(Product);

// describe('User', () => {
// 	before('wait for the db', function(done){
// 		db.didSync
//             .then(() => done())
//             .catch(done);
// 	});
 	
//  	after('clear db', () => db.didSync)

//     describe('Product model', () => {

//         it('POST one', function (done) {
//             console.log('in post')
//             agent
//             .post('/api/products')
//             .send({
//                 name: 'Testy Newproduct',
//                 'price': 99.99,
//                 'description': "it's a thing!",
//                 'quantity': 5,
//                 'type': 'chair',
//                 'style': 'Coastal',
//                 'color': 'blue',
//                 'material': 'bamboo',
//                 'images': ["https://dummyimage.com/320x150/ddd/fff.jpg&text=1","https://dummyimage.com/320x150/ddd/fff.jpg&text=2","https://dummyimage.com/320x150/ddd/fff.jpg&text=3"]
//             })
//             .expect(201)
//             .end(function (err, res) {
//                 console.log('got past 201', err)
//                 if (err) return done(err);
//                 expect(res.body.name).to.equal('Testy Newproduct');
//                 expect(res.body.id).to.exist;
//                 Product.findById(res.body.id)
//                     .then(function (b) {
//                         expect(b).to.not.be.null;
//                         expect(res.body).to.eql(toPlainObject(b));
//                         done();
//                     })
//                     .catch(done);
//                 })
//                 .catch(err => console.log(err))
//             });
//     })
// })