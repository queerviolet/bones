import axios from 'axios';

// ---------------------> TAGS <---------------------
export const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';

// ----------------> ACTION CREATORS <----------------
export const receiveAccount = account => ({
	type: RECEIVE_ACCOUNT,
	account
});

// --------------------> THUNKS <--------------------

export const fetchAccount = (id) => dispatch => {
	axios.get(`/api/users/${id}`)
		.then(res => {
			dispatch(receiveAccount(res.data))
		})
		.catch(err => {
			console.error('Unable to fetch account', err);
		});
};

// --------------------> REDUCER <--------------------
export default function account(state = {}, action) {
	switch (action.type) {
		case RECEIVE_ACCOUNT:
			return action.account;
		default:
			return state;
	};
};
