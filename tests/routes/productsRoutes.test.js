// 'use strict'

// import app from 'APP/server/api';
// import Promise from 'bluebird';
// import models from 'APP/db/models';
// import supertest from 'supertest';
// import fs from 'fs';

// const expect = 'chai'.expect;
// const agent = supertest.agent(app);

// const db = require('APP/db');
// const Product = db.models.products;
// console.log(Product);

// describe('Product routes', () => {
// 	before('wait for the db', (done) => {
// 		db.didSync
// 			.then(() => done())
// 			.catch(done);
// 	});
	
// 	after('clear db', () => db.didSync)

// 	describe('Product model', () => {

// 		it('get all products', function (done) {
// 			agent
// 			.get('/api/products')
// 			.expect(201, done)
// 		});

// 		it('POST one', function (done) {
// 			agent
// 			.post('/api/products')
// 			.send({
// 					name: 'Testy Newproduct',
// 					'price': 99.99,
// 					'description': "it's a thing!",
// 					'quantity': 5,
// 					'type': 'chair',
// 					'style': 'Coastal',
// 					'color': 'blue',
// 					'material': 'bamboo',
// 					'images': ["https://dummyimage.com/320x150/ddd/fff.jpg&text=1"]
// 			})
// 			.expect(201)
// 			.end(function (err, res) {
// 				console.log('got past 201', err)

// 				if (err) return done(err);
// 				expect(res.body.name).to.equal('Testy Newproduct');
// 				expect(res.body.id).to.exist;
// 				Product.findById(res.body.id)
// 					.then(function (b) {
// 							expect(b).to.not.be.null;
// 							expect(res.body).to.eql(toPlainObject(b));
// 							done();
// 					})
// 					.catch(done);
// 			})
// 			.catch(err => console.log(err))
// 		});
// 	})
// })