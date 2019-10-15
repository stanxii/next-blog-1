import React from 'react';
import Router from 'next/router';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';

import AuthUserContext from './context';


const withAuthorization = (condition, route = '/') => Component => {
  class WithAuthorization extends React.Component {
    constructor (props) {
      super(props);
      this.state = { isChecked: false };
    }
    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser)) {
            Router.push(route);
          } else {
            this.setState({ isChecked: true });
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { isChecked } = this.state;
      if (!isChecked) return '';
      return (
        <AuthUserContext.Consumer>
          {authUser => condition(authUser) ? <Component {...this.props} /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;