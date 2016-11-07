import axios from 'axios';
import { browserHistory } from 'react-router';

/* -----------------    ACTIONS     ------------------ */

const SET    = 'SET_CURRENT_USER'
const REMOVE = 'REMOVE_CURRENT_USER'

/* ------------   ACTION CREATORS     ------------------ */

const set   = userId => ({ type: SET, userId })
const remove  = () => ({ type: REMOVE })

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = null, action) {
  switch (action.type) {
    
    case SET: 
      return action.userId;

    case REMOVE: 
      return null;  

    default: 
      return currentUser;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const login = (credentials, displayErr) => dispatch => {
  axios.post('/api/auth/login', credentials)
    .then(res => {
      dispatch(set(res.data.id));
      browserHistory.push(`/`);
    })
    .catch(err => {
      console.error('Unable to log in', err)
      displayErr('Invalid credentials');
    });
}

export const signup = credentials => dispatch => {
  axios.post('/api/auth/signup', credentials)
    .then(res => {
      dispatch(set(res.data.id));
      browserHistory.push(`/`);
    })
    .catch(err => console.error('Unable to sign up', err));
}

export const retrieveLoggedInUser = () => dispatch => {
  axios.get('/api/auth/me')
    .then(res => {
      if (res.data.id)
        dispatch(set(res.data.id))
    })
    .catch(err => console.error('Unable to retrieve logged in user', err));
}

export const logout = () => dispatch => {
  axios.delete('/api/auth/logout')
    .then(() => {
      dispatch(remove());
      browserHistory.push(`/`);
    })
    .catch(err => console.error('Unable to logout', err));
}