// 'use strict'

// const db = require('APP/db')
// const lineItem = require('APP/db/models/lineItem')
// const {expect} = require('chai')

// describe('lineItem', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       lineItem.create({ password: 'ok' })
//         .then(lineItem => lineItem.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       lineItem.create({ password: 'ok' })
//         .then(lineItem => lineItem.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })