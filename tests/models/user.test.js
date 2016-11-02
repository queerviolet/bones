'use strict'

const db = require('APP/db');
const User = require('APP/db/models/user');
const chai = require('chai');
const Bluebird = require('bluebird');
const chaiProperties = require('chai-properties');
const chaiThings = require('chai-things');
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const supertest = require('supertest-as-promised');
const sinon = require('sinon');

describe('User', () => {
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

		it('resolves true if the password matches', () =>
			User.findOne({where: {email: "trump@secrets.org"}})
				.then(user => user.authenticate('abcde'))
				.then(result => expect(result).to.be.true))

		it("resolves false if the password doesn't match", () =>
			User.findOne({where: {email: "trump@secrets.org"}})
				.then(user => user.authenticate('not ok'))
				.then(result => expect(result).to.be.false))
	})

	describe('throw an error for invalidated data', () => {

		it('when first name is empty', () => {
			const user = User.build({
				first_name: null,
				last_name: 'Trump',
				email: 'test@secrets.org',
				password: 'abcde'
			})

			return user.validate()
				.then(err=> {
				expect(err).to.be.an('object');
				expect(err.errors).to.contain.a.thing.with.properties({
            path: 'first_name',
            type: 'notNull Violation'
        });
			})
		})
			

		// it("when email is duplicated", () => {
		// 	const user = User.build({
		// 		first_name: 'name',
		// 		last_name: 'random',
		// 		email: 'trump@secrets.org',
		// 		password: 'abcde'
		// 	})

		// 	return user.validate()
		// 		.then(err=> {
		// 		expect(err).to.be.an('object');
		// 		expect(err.errors).to.contain.a.thing.with.properties({
  //           path: 'email',
  //           type: 'unique Violation'
  //       });
		// 	})
		// })
	})
})

