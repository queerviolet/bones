'use strict'

// Create constant for Actions
export const UPDATE_TOTAL = 'UPDATE_TOTAL';

// Action creator
export const updateTotal = (total) => {
  return {
    type: UPDATE_TOTAL,
    total
  };
};
