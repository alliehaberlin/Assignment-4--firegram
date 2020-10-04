import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBw24qvguJRB9C7S20J9Rgrjos75UhhOjI",
    authDomain: "firegram-b9883.firebaseapp.com",
    databaseURL: "https://firegram-b9883.firebaseio.com",
    projectId: "firegram-b9883",
    storageBucket: "firegram-b9883.appspot.com",
    messagingSenderId: "878160641254",
    appId: "1:878160641254:web:5f9b6b91c39aa5c9810f27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export { projectStorage, projectFirestore };
 