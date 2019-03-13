import {
	CHANGE_LOGIN_USERNAME_FIELD,
	CHANGE_LOGIN_PASSWORD_FIELD,
	REQUEST_LOGIN_PENDING,
	REQUEST_LOGIN_SUCCESS,
	REQUEST_LOGIN_FAILED
} from './constants.js';

const initialStateLogin = {
	usernameField: '',
	passwordField: '',
	isPending: false,
	token: '',
	error: ''
}

export const changeLoginField = (state=initialStateLogin, action={}) => {
	switch(action.type){
		case CHANGE_LOGIN_USERNAME_FIELD:
			return Object.assign({}, state, {usernameField: action.payload});
		case CHANGE_LOGIN_PASSWORD_FIELD:
			return Object.assign({}, state, {passwordField: action.payload});
		default:
			return state;
	}
}

export const updateLoginInfo = (state=initialStateLogin, action={}) => {
	switch(action.type){
		case REQUEST_LOGIN_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUEST_LOGIN_SUCCESS:
			return Object.assign({}, state, { isPending: false, token: action.payload });
		case REQUEST_LOGIN_FAILED:
			return Object.assign({}, state, { isPending: false, error: action.payload });
		default:
			return state;
	}
}

