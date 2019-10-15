import { apps } from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import config from '../../config';

class Firebase {
  constructor() {
    if (!apps.length) {
      firebase.initializeApp(config);
    }

    this.auth = firebase.auth();
  }

  emailSignup = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  emailSignin = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  signOut = () => this.auth.signOut();
}

export default Firebase;
