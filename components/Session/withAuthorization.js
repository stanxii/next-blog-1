import React from 'react';
import Router from 'next/router';
import { compose } from 'recompose';

import { withFirebase } from '../firebase';
import AuthUserContext from './context';


const withAuthorization = (condition, route) => WrapComponent => {
  class WithAuthorization extends React.Component {
    constructor (props) {
      super(props);
      this.state = { isChecked: false };
    }
    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(
        authUser => {
          if (!condition(authUser) && route) {
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
          {authUser => condition(authUser) ? <WrapComponent {...this.props} /> : null}
        </AuthUserContext.Consumer>
      );
    }
  }

  return compose(
    withFirebase,
  )(WithAuthorization);
};

export default withAuthorization;