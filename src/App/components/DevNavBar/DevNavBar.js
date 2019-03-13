import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DevNavBar.scss';

//actions
import { setLoginPage, setViewMembersPage, setEditMemberPage, setAddMember  } from '../../actions.js';

const mapStateToProps = state => {
	return {
		page: state.changePage.page
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onLoginPage: () => dispatch(setLoginPage()),
		onViewMembersPage: () => dispatch(setViewMembersPage()),
		onEditMemberPage: () => dispatch(setEditMemberPage()),
		onAddMemberPage: () => dispatch(setAddMember())
	};
}

class DevNavBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			disableStyle: {
				display: 'auto'
			}
		}
	}

	disableBtn = () => {
		this.setState({ disableStyle : {
			display: 'none'	
		}})
	}

	render(){
		const { onLoginPage, onViewMembersPage, onEditMemberPage, onAddMemberPage } = this.props;
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light" style={this.state.disableStyle}>
			  <p className="navbar-brand" href="#">Dev Navbar</p>
			  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav">
			      <li className="nav-item">
			        <button className="nav-link" onClick={onLoginPage}>Login</button>
			      </li>
			      <li className="nav-item">
			        <button className="nav-link" onClick={onViewMembersPage}>View Members</button>
			      </li>
			      <li className="nav-item">
			        <button className="nav-link" onClick={onEditMemberPage}>Edit Member</button>
			      </li>
			      <li className="nav-item">
			        <button className="nav-link" onClick={onAddMemberPage}>Add Member</button>
			      </li>
			      <li className="nav-item">
			        <button className="nav-link text-danger" onClick={this.disableBtn}>Disable Navbar</button>
			      </li>
			    </ul>
			  </div>
			</nav>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DevNavBar);