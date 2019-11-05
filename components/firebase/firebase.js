import { apps } from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from '../../config';

class Firebase {
  constructor() {
    if (!apps.length) {
      firebase.initializeApp(config);
    }
    this.auth = firebase.auth();
    this.setting = {};
  }

  emailSignin = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  getPageSetting = (callback) => {
    const starCountRef = firebase.database().ref('setting');
    starCountRef.on('value', (snapshot) => callback(snapshot.val()));
  }

  setPageSetting = async (pageSetting, callback) => {
    const starCountRef = firebase.database().ref('setting');
    return await starCountRef.set(pageSetting, callback);
  }

  getPosts = (callback) => {
    const postsRef = firebase.database().ref('posts');
    postsRef.on('value', (snapshot) => callback(snapshot.val()));
  }

  getPostDetail = (id, callback) => {
    const postRef = firebase.database().ref(`posts/${id}`);
    postRef.once('value', (snapshot) => callback(snapshot.val()));
  }

  setPost = (id, data, callback) => {
    const postRef = firebase.database().ref(`posts/${id}`);
    postRef.set(data, (res) => callback && callback(res));
  }

  deletePost = (id) => {

  }
}

export default Firebase;
