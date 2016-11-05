'use strict'

// Create constant for Actions
export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

// Action creator
export const updateCart = (itemId, qty) => {
  return {
    type: UPDATE_CART,
    itemId,
    qty
  };
};

// remove an item from the cart by
export const removeItemFromCart = (itemId) => {
  return {
    type: REMOVE_CART_ITEM,
    itemId
  };
};

