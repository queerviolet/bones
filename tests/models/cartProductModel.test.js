'use strict'

import db from 'APP/db';
import CartProduct from 'APP/db/models/cartProduct';
import Product from 'APP/db/models/product';

import chai from 'chai';
const expect = chai.expect;

import Bluebird from 'bluebird';

describe('CartProduct Model', () => {
	const sessionId1 = 'ABC';
	const sessionId2 = 'XYZ';
	before('wait for the db', function(done){
		db.didSync
		.then(() => {
			Bluebird.all([
				Product.create({
					name: 'Testy Newproduct',
					'price': 99.99,
					'description': "it's a thing!",
					'quantity': 5,
					'type': 'bed',
					'style': 'coastal',
					'color': 'blue',
					'material': 'bamboo',
					'images': ["https://dummyimage.com/320x150/ddd/fff.jpg&text=1"]
				}),
				Product.create({
					name: 'My Chair',
					'price': 20,
					'description': "it's a chair!",
					'quantity': 100,
					'type': 'chair',
					'style': 'gothic',
					'color': 'red',
					'material': 'MDF',
					'images': ["https://dummyimage.com/320x150/ddd/fff.jpg&text=2"]
				}),
				CartProduct.create({
					'sessionId': sessionId1,
					'product_id': 1,
					'quantity': 1
				}),
				CartProduct.create({
					'sessionId': sessionId2,
					'product_id': 2,
					'quantity': 1
				})
			])
			.then(() => done())
			.catch(done);
		})
	});
	
	after('clear db', () => db.didSync)

	describe('Associated Model', () => {

		it('has proper properties with associated tables', (done) => {
			CartProduct.findById(1)
			.then(result => {
				expect(result.dataValues).to.include.keys('sessionId', 'product_id', 'quantity');
				done();
			})
			.catch(done)
		}) 
	})

	describe('data validation', () => {

		it('throws an error for duplicate cart product', (done) => {
			let cartProduct = CartProduct.build({
				'sessionId': sessionId1,
				'product_id': 1,
				'quantity': 1
			})

			cartProduct.validate()
			.then(err => {
				expect(err).to.be.an('object')
				expect(err).to.be.an.instanceOf(Error);	
				expect(err.errors).to.contain.a.thing.with.properties({
					path: 'noDuplicatedCartProducts',
					type: 'Validation error'
				});
				done();
			})
			.catch(done);
		}) 
	})

	describe('class methods', () => {

		it('throws an error for duplicate cart product', (done) => {
			CartProduct.clearCart(sessionId1)
				.then(() => CartProduct.findAll({ where: { sessionId: sessionId1 } }))
				.then(deletedCartProducts => {
					expect(deletedCartProducts.length).to.equal(0);
					return CartProduct.findAll({ where: { sessionId: sessionId2 } })
				})
				.then(otherCartProducts => {
					expect(otherCartProducts.length).to.equal(1);
					done();
				})
				.catch(done);
		}) 
	})
})
