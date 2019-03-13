import {
	LOGIN_PAGE,
	VIEW_MEMBERS,
	EDIT_MEMBER,
	ADD_MEMBER
} from './constants.js';

export const setLoginPage = () => ({
	type: LOGIN_PAGE,
	payload: 'login'
});

export const setViewMembersPage = () => ({
	type: VIEW_MEMBERS,
	payload: 'view_members'
});

export const setEditMemberPage = () => ({
	type: EDIT_MEMBER,
	payload: 'edit_member'
});

export const setAddMember = () => ({
	type: ADD_MEMBER,
	payload: 'add_member'
})