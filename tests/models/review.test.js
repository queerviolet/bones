// 'use strict'

// const db = require('APP/db')
// const review = require('APP/db/models/review')
// const {expect} = require('chai')

// describe('review', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       review.create({ password: 'ok' })
//         .then(review => review.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       review.create({ password: 'ok' })
//         .then(review => review.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })