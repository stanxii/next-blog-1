import React,  { Component } from 'react';
import { compose } from 'recompose';
import Swal from 'sweetalert2';
import Router from 'next/router';
import * as Routes from '../constants/routes';
import { withFirebase } from '../components/firebase';
import { withAuthorization } from '../components/Session';

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
      <form className="modal-content animate" action="/action_page.php" method="post">
        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input onChange={this.onChange} value={email}  type="text" placeholder="Enter email" name="email" required />
          <label htmlFor="password"><b>Password</b></label>
          <input onChange={this.onChange} value={password} type="password" placeholder="Enter Password" name="password" required />
          <button type="button" onClick={this.onSubmit}>Login</button>
        </div>
      </form>
      <style jsx>{`
        .container {
          background-color: #f1f1f1;
          padding: 16px;
        }
        .login-form {
          width: 600px;
          margin: 0 auto;
        }
        input[type=text], input[type=password] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        button {
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          opacity: 0.8;
        }

        @media screen and (max-width: 300px) {
          span.psw {
            display: block;
            float: none;
          }
        }
    `}</style>
    </div>)
  }
}
const isNotLoggedIn = (user) => ! user;
export default compose(withAuthorization(isNotLoggedIn, Routes.ADMIN),withFirebase)(Login);
