'use strict'

import db from 'APP/db';
import Order from 'APP/db/models/order';

import chai from 'chai';
const expect = chai.expect;

import Bluebird from 'bluebird';

describe('Order Model', () => {
	before('wait for the db', function(done){
		db.didSync
		.then(() => {
			Bluebird.all([
				Order.create({
					confirmation_number: 'gugugugu',
					status: 'processing',
					order_date: new Date()
				}),
				Order.create({
					confirmation_number: 'hohohoho',
					status: 'completed',
					order_date: new Date()
				})
			])
			.then(() => done())
			.catch(done);
		})
	});
	
	after('clear db', () => db.didSync)

	describe('Associated Model', () => {

		it('has proper properties with associated tables', (done) => {
			Order.findById(1)
			.then(result => {
				expect(result.dataValues).to.include.keys('shipping_address_id', 'billing_address_id', 'credit_card_id', 'user_id');
				done();
			})
			.catch(done)
		}) 
	}) 

	// describe('data validation', () => {

	// 	it('throws an error for invalid Orders', () => {
	// 		let order1 = Order.build({
	// 				confirmation_number: 'hohohoho',
	// 				status: 'completed',
	// 				order_date: 'today'
	// 			})

	// 		order1.validate()
	// 		.then(err => {
	// 			expect(err).to.be.an('object')
	// 			expect(err).to.be.an.instanceOf(Error);	
	// 			expect(err.errors).to.contain.a.thing.with.properties({
	// 				path: 'rating',
	// 				type: 'notNull Violation'
	// 			});
	// 		})
	// 	}) 
	// })
})


