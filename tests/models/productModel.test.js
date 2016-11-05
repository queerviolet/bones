'use strict'

import db from 'APP/db';
import Product from 'APP/db/models/product';

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;

import Bluebird from 'bluebird';

describe('Product Model', () => {
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
				},
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
				}))
			])
			.then(() => done())
			.catch(done);
		})
	});
	
	after('clear db', () => db.didSync)

	describe('data validation', () => {

		it('throws an error for invalid quantity', (done) => {
			let product1 = Product.build({
					name: 'My bed',
					'price': 10,
					'description': "it's a bed!",
					// 'quantity': 100,
					'type': 'bed',
					'style': 'contemporary',
					'color': 'black',
					'material': 'concrete',
					'images': ["https://dummyimage.com/320x150/ddd/fff.jpg&text=2"]
				})

			product1.validate()
			.then(err => {
				expect(err).to.be.an('object')
				expect(err).to.be.an.instanceOf(Error);	
				expect(err.errors).to.contain.a.thing.with.properties({
					path: 'quantity',
					type: 'notNull Violation'
				});
				done();
			})
			.catch(done);
		})

		// it('throws an error for invalid type', () => {
		// 	let product2 = Product.build({
		// 			name: 'My closet',
		// 			'price': 20,
		// 			'description': "it's a closet!",
		// 			'quantity': 30,
		// 			'type': 'closet',
		// 			'style': 'horror',
		// 			'color': 'pink',
		// 			'material': 'glass',
		// 			'images': ["https://dummyimage.com/320x150/ddd/fff.jpg&text=2"]
		// 		})

		// 	product2.validate()
		// 	.then(err => {
		// 		expect(err).to.be.an('object')
		// 		expect(err).to.be.an.instanceOf(Error);	
		// 		expect(err.errors).to.contain.a.thing.with.properties({
		// 			path: 'quantity',
		// 			type: 'Validation error'
		// 		});
		// 	})
		// }) 
	})
})