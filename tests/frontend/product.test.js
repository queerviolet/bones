import { createStore } from 'redux'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import axios from 'axios';

import rootReducer from 'APP/browser/redux/index'
import actualStore from 'APP/browser/store'
import { axiosResponse } from './../utils.js'

import { RECEIVE_PRODUCTS,
         receiveProducts,
         fetchProducts } from 'APP/browser/redux/products'

import { RECEIVE_PRODUCT,
         receiveProduct,
         fetchProduct } from 'APP/browser/redux/product'


describe('Products', () => {
  describe('Redux', () => {

    let testProducts;
    beforeEach('Create testing store from reducer', () => {
      testProducts = [
        { id: 1, name: 'Product #1' },
        { id: 2, name: 'Product #2' },
        { id: 3, name: 'Product #3' }
      ];
    });

    describe('action creators', () => {
      it(`${RECEIVE_PRODUCTS} returns expected action`, () => {
        const action = receiveProducts(testProducts);
        expect(action).to.be.deep.equal({
          type: RECEIVE_PRODUCTS,
          products: testProducts
        });
      });
      it(`${RECEIVE_PRODUCT} returns expected action`, () => {
        const action = receiveProduct(testProducts[0]);
        expect(action).to.be.deep.equal({
          type: RECEIVE_PRODUCT,
          product: testProducts[0]
        });
      });
    });

    describe('store/reducer', () => {
      let testingStore;
      beforeEach('Create testing store from reducer', () => {
        testingStore = createStore(rootReducer);
      });

      it('has initial state of empty products array', () => {
        const currentStoreState = testingStore.getState();
        expect(currentStoreState.products).to.be.deep.equal([]);
      });

      it(`reducing on ${RECEIVE_PRODUCTS}`, () => {
        testingStore.dispatch(receiveProducts(testProducts));
        const newState = testingStore.getState();
        expect(newState.products).to.be.deep.equal(testProducts);
      });

      it('has initial state of empty product objet', () => {
        const currentStoreState = testingStore.getState();
        expect(currentStoreState.currentProduct).to.be.deep.equal({});
      });

      it(`reducing on ${RECEIVE_PRODUCT}`, () => {
        testingStore.dispatch(receiveProduct(testProducts[0]));
        const newState = testingStore.getState();
        expect(newState.currentProduct).to.be.deep.equal(testProducts[0]);
      });


      describe('thunks', () => {

        afterEach('Removing Function Mocks', () => {
          axios.get.restore()
        })

        it('retrieving products asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.products).to.be.deep.equal(testProducts);
            done();
          }

          let mock = sinon.mock(axios).expects('get').once().withArgs('/api/products')
            .returns(axiosResponse(testProducts));
          fetchProducts()(fakeDispatch);
          mock.verify();
        });


        it('retrieving product asynchronously', (done) => {
          const fakeDispatch = (dispatchedItem) => {
            testingStore.dispatch(dispatchedItem);
            const newState = testingStore.getState();
            expect(newState.currentProduct).to.be.deep.equal(testProducts[0]);
            done();
          }

          let mock = sinon.mock(axios).expects('get').once()
            .returns(axiosResponse(testProducts[0]));
          fetchProduct(testProducts[0].id)(fakeDispatch);
          mock.verify();
          //USED after once() in mock: .withArgs(`/api/products/${testProducts[0].id}`)
        });

      })


    });
  });
});


