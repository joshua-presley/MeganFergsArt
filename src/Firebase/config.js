import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBwbczyNFHYruyHXDiBJfoJC58NjSVk-oI",
    authDomain: "megangram-5d45f.firebaseapp.com",
    projectId: "megangram-5d45f",
    storageBucket: "megangram-5d45f.appspot.com",
    messagingSenderId: "872189187395",
    appId: "1:872189187395:web:25c9b92af850f4678e8bf6",
    measurementId: "G-G2QTPLYP6E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFireStore, timestamp};
