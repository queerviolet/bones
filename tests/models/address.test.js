// 'use strict'

// const db = require('APP/db')
// const Address = require('APP/db/models/address')
// const {expect} = require('chai')

// describe('address', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       address.create({ password: 'ok' })
//         .then(address => address.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       address.create({ password: 'ok' })
//         .then(address => address.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })