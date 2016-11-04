'use strict'

// Create constant for Actions
export const UPDATE_CART = 'UPDATE_CART';

// Action creator
export const updateCart = (itemId, qty) => {
  return {
    type: UPDATE_CART,
    itemId,
    qty
  }
}

