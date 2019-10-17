import React,  { Component } from 'react';
import { compose } from 'recompose';
import Swal from 'sweetalert2';
import Router from 'next/router';
import * as Routes from '../constants/routes';
import { withFirebase } from '../components/firebase';
import { withAuthorization } from '../components/Session';
import withPage from '../components/layout/page';
import Head from '../components/layout/head';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  onChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }

  onSubmit = async () => {
    const { firebase } = this.props
    const { email, password } = this.state;
    try {
      const result = await firebase.emailSignin(email, password);
      if (result && result.user) {
        Router.push(Routes.ADMIN);
      }
    } catch (error) {
      Swal.fire('', error.message, 'error');
    }
  }

  render () {
    const { email, password } = this.state;
    return  (<div className="login-form">
      <Head title="Login" />
      <form className="modal-content animate pure-form pure-form-stacked" >
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input onChange={this.onChange} value={email}  type="text" placeholder="Enter email" name="email" required />
          <label htmlFor="password"><b>Password</b></label>
          <input onChange={this.onChange} value={password} type="password" placeholder="Enter Password" name="password" required />
          <button type="button" className="pure-button pure-button-primary" onClick={this.onSubmit}>Login</button>
        </div>
      </form>
      <style jsx>{`
        .login-form {
          width: 400px;
          margin: 30% auto;
        }
        .login-form input {
          color: #333;
        }
    `}</style>
    </div>)
  }
}
const isNotLoggedIn = (user) => !user;
export default compose(
  withPage,
  withAuthorization(isNotLoggedIn, Routes.ADMIN),
  withFirebase
  )(Login);
