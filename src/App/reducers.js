import{
	LOGIN_PAGE,
	VIEW_MEMBERS,
	EDIT_MEMBER,
	ADD_MEMBER
} from './constants.js';

const initialStatePages = {
	page: 'login'
}

export const changePage = (state=initialStatePages, action={}) => {
	switch(action.type){
		case LOGIN_PAGE:
			return Object.assign({}, state, {page: action.payload});
		case VIEW_MEMBERS:
			return Object.assign({}, state, {page: action.payload});
		case EDIT_MEMBER:
			return Object.assign({}, state, {page: action.payload});
		case ADD_MEMBER:
			return Object.assign({}, state, {page: action.payload});
		default:
			return state;
	}
}

