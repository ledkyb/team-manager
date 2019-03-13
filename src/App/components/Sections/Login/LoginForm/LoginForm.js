import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginForm.scss';

//actions
import { setLoginUsername, setLoginPassword, requestLogin } from './actions.js';

const mapStateToProps = state => {
	return {
		usernameField: state.changeLoginField.usernameField,
		passwordField: state.changeLoginField.passwordField,
		isPending: state.updateLoginInfo.isPending
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onChangeLoginUsername: event => dispatch(setLoginUsername(event.target.value)),
		onChangeLoginPassword: event => dispatch(setLoginPassword(event.target.value)),
		onSubmitLogin: data => dispatch(requestLogin(data))
	}
}

class LoginForm extends Component{
	handleLoginClick = event => {
		event.preventDefault();
		const userData = JSON.stringify({
			username: this.props.usernameField,
			password: this.props.passwordField,
		});
		return this.props.onSubmitLogin(userData); 
	}

	render(){
		const { onChangeLoginUsername, onChangeLoginPassword, isPending } = this.props;
		return isPending ? <p className="loading mt-5">Loading..</p> :
		(
			<div className="login-form-container">
				<form>
					<div className="login-form-username-container">
						<label className="font-weight-bold my-0" htmlFor="username">Username</label>
						<input type="text" id="username" onChange={onChangeLoginUsername}/>
					</div>
					<div className="login-form-password-container">
						<label className="font-weight-bold my-0" htmlFor="password">Password</label>
						<input type="password" id="password" onChange={onChangeLoginPassword}/>
					</div>
					<button className="font-weight-bold" onClick={this.handleLoginClick}>Sign In</button>
				</form>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);