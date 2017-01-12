import axios from 'axios';

const unknownUserInfo = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
  isAdmin: false
};

// ---------------------> Action type constant <---------------------
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// ----------------> ACTION CREATORS <----------------
export const recieveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
});

export const updateUserInfo = userInfo => ({
  type: UPDATE_USER_INFO,
  userInfo
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

  switch (type) {
    case RECEIVE_USER_INFO:
      return Object.assign({}, userInfo);

    case UPDATE_USER_INFO:
      return Object.assign({}, userInfo);

    default:
      return state;
  }
};

export default userInfoReducer;
