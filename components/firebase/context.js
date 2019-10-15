import React from 'react';
import Firebase from './firebase';

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => {
  return(
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={new Firebase()} />}
  </FirebaseContext.Consumer>
)};


export default FirebaseContext;
