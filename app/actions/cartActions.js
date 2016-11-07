'use strict'

// Create constant for Actions
export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const EMPTY_CART = 'EMPTY_CART'

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

export const clearCart = () => {
  return {
    type: EMPTY_CART
  }
}
