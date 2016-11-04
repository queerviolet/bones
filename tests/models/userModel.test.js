'use strict'

import db from 'APP/db';
import User from 'APP/db/models/user';

import chai from 'chai';
const expect = chai.expect;

import Bluebird from 'bluebird';

describe('User Model', () => {
	before('wait for the db', function(done){
		db.didSync
			.then(() => {
				Bluebird.all([
					User.create({
						first_name: 'barack',
						last_name: 'obama',
						email: 'beth@secrets.org',
						password: '12345'
					}),
					User.create({
						first_name: 'Hillary',
						last_name: 'Clinton',
						email: 'clinton@secrets.org',
						password: '54321'
					}),
					User.create({
						first_name: 'Donald',
						last_name: 'Trump',
						email: 'trump@secrets.org',
						password: 'abcde'
					})
				])
				.then(() => done())
				.catch(done);
		})
	});
	
	after('clear db', () => db.didSync)

	describe('authenticate(plaintext: String) ~> Boolean', () => {

		it('resolves true if the password matches', (done) => {
			User.findOne({where: {email: "trump@secrets.org"}})
				.then(user => user.authenticate('abcde'))
				.then(result => {
					expect(result).to.be.true;
					done();
				})
				.catch(done);
		})

		it("resolves false if the password doesn't match", (done) => {
			User.findOne({where: {email: "trump@secrets.org"}})
				.then(user => user.authenticate('not ok'))
				.then(result => {
					expect(result).to.be.false;
					done();
				})
				.catch(done);
		})
	})

	describe('Associated Model', () => {

		it('has proper properties with associated tables', (done) => {
			User.findById(1)
			.then(result => {
				expect(result.dataValues)
				.to.include.keys('id', 'first_name', 'last_name', 'email', 'password_digest', 'shipping_address_id', 'billing_address_id')
				.not.include.keys('password');
				done();
			})
			.catch(done);
		}) 
	}) 

	describe('data validation', () => {

		it('throws an error for invalid names', (done) => {
			let user = User.build({
				first_name: null,
				last_name: 'Trump',
				email: 'test@secrets.org',
				password: 'abcde'
			})

			user.validate()
			.then(err => {
				expect(err).to.be.an('object')
				expect(err).to.be.an.instanceOf(Error);	
				expect(err.errors).to.contain.a.thing.with.properties({
					path: 'first_name',
					type: 'notNull Violation'
				});
				done();
			})
			.catch(done);
		})


		it("throws an error for invalid emails", (done) => {
			let user = User.build({
				first_name: 'test',
				last_name: 'random',
				email: 'invalid email',
				password: 'abcde'
			})

			user.validate()
				.then(err => {
					expect(err).to.be.an('object');
					expect(err.errors).to.contain.a.thing.with.properties({
						path: 'email',
						type: 'Validation error'
					});
					done();
				})
				.catch(done);
		}) 
	})
})

