import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';

//components
import DevNavBar from './components/DevNavBar/DevNavBar';
import Login from './components/Sections/Login/Login';
import ViewMembers from './components/Sections/ViewMembers/ViewMembers';
import EditMember from './components/Sections/EditMember/EditMember';
import AddMember from './components/Sections/AddMember/AddMember';

const mapStateToProps = state => {
	return {
		page: state.changePage.page
	}
}

const mapDispatchToProps = dispatch => {
	return {};
}

class App extends Component {

  render() {
  	const { page } = this.props;
  	switch(page){
  		case 'login':
  			return(
  				<div className="App">
  					<DevNavBar />
  					<Login />
  				</div>
  			)
  		case 'view_members':
  			return(
  				<div className="App">
  					<DevNavBar />
  					<ViewMembers />
  				</div>
  			)
      case 'edit_member':
        return(
          <div className="App">
            <DevNavBar />
            <EditMember />
          </div>
        )
      case 'add_member':
        return(
          <div className="App">
            <DevNavBar />
            <AddMember />
          </div>
        )
  		default:
  			return(
  				<div className="App">
  					<h1>Default...</h1>
  				</div>
  			)
  	}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
