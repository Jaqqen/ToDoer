import 'firebase/database';
import firebase from 'firebase/app';

const DB_NOTES_CONFIG = {
  apiKey: "AIzaSyC9HB3rloEsD8rmeB8Rcg8FnUwgjmtQy44",
  authDomain: "p-notes-react.firebaseapp.com",
  databaseURL: "https://p-notes-react.firebaseio.com",
  projectId: "p-notes-react",
  storageBucket: "p-notes-react.appspot.com",
  messagingSenderId: "648423458228"
};

export const FBApp = firebase.initializeApp(DB_NOTES_CONFIG);

export const FBDB = firebase.database().ref().child('notes');
