import React, { Component } from 'react';
import './Login.scss';

//import big logo
import bigLogo from './logo-large.png';

//components
import BlackBorderButton from '../../BlackBorderButton/BlackBorderButton';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
	constructor(){
		super();

		this.state = {
			loginForm: false
		}
	}

	showLoginForm = () => {
		this.setState({ loginForm: true });
	}

	render(){
		return(
			<div id="login-page" className="d-flex flex-column align-items-center">
				<img alt="Ledkyb logo" src={bigLogo} />
				{this.state.loginForm ? 
					<LoginForm /> : 
					<BlackBorderButton onClick={this.showLoginForm} btnText="Sign In"/>}
			</div>
		)
	}
}

export default Login;