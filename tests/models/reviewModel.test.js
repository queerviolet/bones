'use strict'

import db from 'APP/db';
import Review from 'APP/db/models/review';

import chai from 'chai';
const expect = chai.expect;

import Bluebird from 'bluebird';

describe('Review Model', () => {
	before('wait for the db', function(done){
		db.didSync
		.then(() => {
			Bluebird.all([
				Review.create({
					rating: 3,
					comment: 'good good'
				})
			])
			.then(() => done())
			.catch(done);
		})
	});
	
	after('clear db', () => db.didSync)

	describe('Associated Model', () => {

		it('has proper properties with associated tables', (done) => {
			Review.findById(1)
			.then(result => {
				expect(result.dataValues).to.include.keys('id', 'rating', 'comment', 'product_id', 'user_id');
				done();
			})
			.catch(done);
		}) 
	}) 

	describe('data validation', () => {

		it('throws an error for invalid reviews', (done) => {
			let review1 = Review.build({
				rating: null,
				comment: 'bad bad'
			})

			review1.validate()
			.then(err => {
				expect(err).to.be.an('object')
				expect(err).to.be.an.instanceOf(Error);	
				expect(err.errors).to.contain.a.thing.with.properties({
					path: 'rating',
					type: 'notNull Violation'
				});
				done();
			})
			.catch(done);
		}) 
	})
})


