import axios from 'axios';

const unknownUserInfo = {
  detail: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    isAdmin: false
  },
  expanded: false
};

// ---------------------> Action type constant <---------------------
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const EXPAND = 'EXPAND';
export const TOGGLE = 'TOGGLE';
export const REDUCE = 'REDUCE';
export const EXPAND_CHANGE = 'EXPAND_CHANGE';

// ----------------> ACTION CREATORS <----------------
export const recieveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
});

export const updateUserInfo = userInfo => ({
  type: UPDATE_USER_INFO,
  userInfo
});

export const handleExpand = () => ({
  type: EXPAND
});

export const handleToggle = () => ({
  type: TOGGLE
});

export const handleReduce = () => ({
  type: REDUCE
});

export const handleExpandChange = () => ({
  type: EXPAND_CHANGE
});

// --------------------> THUNKS <--------------------

export const fetchUserInfo = userId => dispatch => {
  axios.get(`/api/users/${userId}`)
    .then(res => dispatch(recieveUserInfo(res.data)))
    .catch(err => {
      console.error('Fetching the user info failed', err);
    });
};

// --------------------> REDUCER <--------------------
const userInfoReducer = (state = unknownUserInfo, { type, userInfo }) => {
  const nextState = Object.assign({}, state);

  switch (type) {
    case EXPAND:
      nextState.expanded = 'true';
      return nextState;

    case TOGGLE:
      nextState.expanded = 'toggle';
      return nextState;

    case REDUCE:
      nextState.expanded = 'false';
      return nextState;

    case EXPAND_CHANGE:
      nextState.expanded = 'expanded';
      return nextState;

    case RECEIVE_USER_INFO:
      nextState.detail = userInfo;
      return nextState;

    case UPDATE_USER_INFO:
      nextState.detail = userInfo;
      return nextState;

    default:
      return state;
  }
};

export default userInfoReducer;
