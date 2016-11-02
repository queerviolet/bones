// 'use strict'

// const db = require('APP/db')
// const CartProduct = require('APP/db/models/cartProduct')
// const {expect} = require('chai')

// describe('cartProduct', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       cartProduct.create({ password: 'ok' })
//         .then(cartProduct => cartProduct.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       cartProduct.create({ password: 'ok' })
//         .then(cartProduct => cartProduct.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })