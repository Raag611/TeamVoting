import firebase from 'firebase';

// add SDK Firebase

var firebaseConfig = {
apiKey: "AIzaSyBb_bzlV0Rrfy-IRISsIaNd0ggKNrchd2o",
  authDomain: "project-67-29f70.firebaseapp.com",
  databaseURL: "https://project-67-29f70-default-rtdb.firebaseio.com",
  projectId: "project-67-29f70",
  storageBucket: "project-67-29f70.appspot.com",
  messagingSenderId: "893071930739",
  appId: "1:893071930739:web:5b7515bce6d56d3e2f0106",
  measurementId: "G-B5YB6K5Z7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


export default firebase.database();