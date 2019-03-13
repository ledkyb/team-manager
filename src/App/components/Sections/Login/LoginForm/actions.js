import {
	CHANGE_LOGIN_USERNAME_FIELD,
	CHANGE_LOGIN_PASSWORD_FIELD,
	REQUEST_LOGIN_PENDING,
	REQUEST_LOGIN_SUCCESS,
	REQUEST_LOGIN_FAILED
} from './constants.js';

import { VIEW_MEMBERS } from '../../../../constants.js';

export const setLoginUsername = text => ({ //updates state according to username field
	type: CHANGE_LOGIN_USERNAME_FIELD,
	payload: text
});

export const setLoginPassword = text => ({ //updates state according to password field
	type: CHANGE_LOGIN_PASSWORD_FIELD,
	payload: text
});

//handles sending login information to server
export const requestLogin = data => dispatch => { //redux-thunk looks for function as action
	dispatch({ type: REQUEST_LOGIN_PENDING });
	fetch('https://team.ledkyb.com/login', {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: data
	})
	.then(response => response.json()) 
	.then(data => {
		dispatch({ type: REQUEST_LOGIN_SUCCESS, payload: data.token });//Success -> store token & 
		dispatch({ type: VIEW_MEMBERS, payload: 'view_members' }); //change page to view members
	}) 
	.catch(err => dispatch({ type: REQUEST_LOGIN_FAILED, payload: err })) //Fail -> store error in state
}