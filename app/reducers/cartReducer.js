'use strict'

import { UPDATE_CART, REMOVE_CART_ITEM, EMPTY_CART } from '../actions/cartActions';

// Reducer for Categories
var initCart = JSON.parse(localStorage.getItem('cart'));
console.log('init cart ', initCart);

export default function cartReducer(prevState = initCart || {}, action){
  switch(action.type){

    case UPDATE_CART:
      if (prevState[action.itemId]) {
        prevState[action.itemId] += action.qty;
        var update = Object.assign({}, prevState);
        checkoutLocalStorage(update);
        return update;
      } else {
        prevState[action.itemId] = action.qty;
        var update = Object.assign({}, prevState);
        checkoutLocalStorage(update);
        return update;
      }

    case REMOVE_CART_ITEM:
      delete prevState[action.itemId];
      var update = Object.assign({}, prevState);
      checkoutLocalStorage(update);
      return update;

    case EMPTY_CART:
      checkoutLocalStorage({});
      return {};

    default: return prevState;
  }
}

function checkoutLocalStorage (cart) {
  localStorage.clear();
  console.log('cart ', cart);
  cart = JSON.stringify(cart);
  localStorage.setItem('cart', cart);
  console.log('local ', localStorage);
}
