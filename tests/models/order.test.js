// 'use strict'

// const db = require('APP/db')
// const order = require('APP/db/models/order')
// const {expect} = require('chai')

// describe('order', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       order.create({ password: 'ok' })
//         .then(order => order.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       order.create({ password: 'ok' })
//         .then(order => order.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })