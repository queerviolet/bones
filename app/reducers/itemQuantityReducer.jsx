const initialState = {
  quantity: 0,
  errorText: '',
  isDisabled: true,
  messageOpen: false,
};

// ---------------------> Action type constant <---------------------
export const UPDATE_ITEM_QUANTITY = 'UPDATE_ITEM_QUANTITY';
export const ITEM_ADDED_TO_CART = 'ITEM_ADDED_TO_CART';
export const HANDLE_SNACKBAR_CLOSE = 'HANDLE_SNACKBAR_CLOSE';


// ----------------> ACTION CREATORS <----------------
export const updateQuantity = amount => ({
  type: UPDATE_ITEM_QUANTITY,
  amount
});

export const addedItemToCart = () => ({
  type: ITEM_ADDED_TO_CART
});

export const handleSnackbarClose = () => ({
  type: HANDLE_SNACKBAR_CLOSE
});


// --------------------> REDUCER <--------------------
const itemQuantityReducer = (state = initialState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_ITEM_QUANTITY:
      nextState.quantity = action.amount;
      nextState.isDisabled = action.amount <= 0;
      nextState.errorText = (action.amount <= 0) ? 'Please enter a valid amount.' : '';
      return nextState;

    case ITEM_ADDED_TO_CART:
      nextState.messageOpen = true;
      return nextState;

    case HANDLE_SNACKBAR_CLOSE:
      nextState.messageOpen = false;
      return nextState;

    default:
      return state;
  }
};

export default itemQuantityReducer;
