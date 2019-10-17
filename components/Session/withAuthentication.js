import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../firebase';

const withAuthentication = WrapComponent => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = { authUser: null };
    }

    componentDidMount() {
      const { firebase } = this.props;
      this.listener = firebase.auth.onAuthStateChanged(
        authUser => {
          console.log('authUser', authUser);
          this.setState({ authUser: authUser || null });
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <WrapComponent {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;
