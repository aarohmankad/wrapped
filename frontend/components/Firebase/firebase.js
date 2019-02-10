import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from '../../config/firebaseConfig';

export default class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      app.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doEmailUpdate = email => this.auth.currentUser.updateEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
