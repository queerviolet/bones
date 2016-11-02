// 'use strict'

// const db = require('APP/db')
// const CreditCard = require('APP/db/models/creditCard')
// const {expect} = require('chai')

// describe('creditCard', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       creditCard.create({ password: 'ok' })
//         .then(creditCard => creditCard.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       creditCard.create({ password: 'ok' })
//         .then(creditCard => creditCard.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })