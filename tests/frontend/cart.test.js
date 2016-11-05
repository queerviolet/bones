import { createStore } from 'redux'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import axios from 'axios';

import rootReducer from 'APP/browser/redux/index'
import actualStore from 'APP/browser/store'
import { axiosResponse } from './../utils.js'

import { ADDED_PRODUCT, RECEIVE_CART,
         addedProduct, receiveCart, 
         addToCart, fetchCart } from 'APP/browser/redux/cart'

describe('Cart', () => {
  describe('Redux', () => {

    let testCartProduct;
    let testCartProducts;
    beforeEach('Create testing store from reducer', () => {
      testCartProducts = [{ id: 1, quantity: 1, product_id: 1 },
                          { id: 2, quantity: 2, product_id: 2 }];
      testCartProduct = { id: 3, quantity: 3, product_id: 3 }
    });

    describe('action creators', () => {
      it(`${ADDED_PRODUCT} returns expected action`, () => {
        const action = addedProduct(testCartProduct);
        expect(action).to.be.deep.equal({
          type: ADDED_PRODUCT,
          product: testCartProduct
        });
      });
      it(`${RECEIVE_CART} returns expected action`, () => {
        const action = receiveCart(testCartProducts);
        expect(action).to.be.deep.equal({
          type: RECEIVE_CART,
          cartProducts: testCartProducts
        });
      });
    });

    describe('store/reducer', () => {
      let testingStore;
      beforeEach('Create testing store from reducer', () => {
        testingStore = createStore(rootReducer);
      });

      it('has initial state of empty cartProducts array', () => {
        const currentStoreState = testingStore.getState();
        expect(currentStoreState.cartProducts).to.be.deep.equal([]);
      });

      it(`reducing on ${RECEIVE_CART}`, () => {
        testingStore.dispatch(receiveCart(testCartProducts));
        const newState = testingStore.getState();
        expect(newState.cartProducts).to.be.deep.equal(testCartProducts);
      });

      it(`reducing on ${ADDED_PRODUCT}`, () => {
        testingStore.dispatch(addedProduct(testCartProduct));
        const newState = testingStore.getState();
        expect(newState.cartProducts).to.be.deep.equal([testCartProduct]);
      });


      describe('thunks', () => {

        let axiosMethod;
        afterEach('Removing Function Mocks', () => {
          axios[axiosMethod].restore();
        })

        it('retrieving cart asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.cartProducts).to.be.deep.equal(testCartProducts);
            done();
          }

          axiosMethod = 'get';
          let mock = sinon.mock(axios).expects(axiosMethod).once().withArgs('/api/cart-products')
            .returns(axiosResponse(testCartProducts));
          fetchCart()(fakeDispatch);
          mock.verify();
        });

        /*
        actually adds to database which is bad
        it('adding product to cart asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.cartProducts).to.be.deep.equal([testCartProduct]);
            done();
          }

          axiosMethod = 'post';
          let mock = sinon.mock(axios).expects(axiosMethod).once().withArgs('/api/cart-products')
            .returns(axiosResponse(testCartProduct));
          addToCart(testCartProduct.id)(fakeDispatch);
          mock.verify();
        });
        */

      })


    });
  });
});


