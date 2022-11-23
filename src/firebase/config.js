import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCLA4htP5HbMmdXupQk9-MyTkrgcHCcD_o",
    authDomain: "db-cooking-ninja.firebaseapp.com",
    projectId: "db-cooking-ninja",
    storageBucket: "db-cooking-ninja.appspot.com",
    messagingSenderId: "695354886328",
    appId: "1:695354886328:web:7937cea07ed2d2f73ccc4d"
  };
  
  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init services
const projectFirestore = firebase.firestore()

export { projectFirestore }