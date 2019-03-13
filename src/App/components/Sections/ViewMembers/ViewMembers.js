import React, { Component } from 'react';
import { connect } from 'react-redux';

import './ViewMembers.scss';

const mapStateToProps = state => {
	return {
		token: state.updateLoginInfo.token
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

class ViewMembers extends Component{
	render(){
		return(
			<div id="view-members-page">
				<h1>View Members Page</h1>
				<p>{this.props.token}</p>
			</div>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMembers);