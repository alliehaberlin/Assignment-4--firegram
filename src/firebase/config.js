import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYsYfTPkEgMG1iH9O9JyCZ5HnGHCqh-b8",
    authDomain: "firegram-d6439.firebaseapp.com",
    databaseURL: "https://firegram-d6439.firebaseio.com",
    projectId: "firegram-d6439",
    storageBucket: "firegram-d6439.appspot.com",
    messagingSenderId: "249418565642",
    appId: "1:249418565642:web:2e900cfdcd5fced25c77f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };