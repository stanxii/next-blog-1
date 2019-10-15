import React,  { Component } from 'react';
import { compose } from 'recompose';
import * as Routes from '../constants/routes';

import { withFirebase } from '../components/firebase';
import { withAuthorization } from '../components/Session';

class Admin extends Component {
  constructor (props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render () {
    return  (<div className="login-form">
      Admin
    </div>)
  }
}
const isLoggedIn = user => !!user;
export default compose(withAuthorization(isLoggedIn, Routes.LOGIN), withFirebase)(Admin);
