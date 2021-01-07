import firebase from 'firebase';
require('@firebase/firestore')
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD4FRXyVhWFHhRhtp6kgIupvIrh88rFReA",
    authDomain: "barter-system-app-4f110.firebaseapp.com",
    databaseURL: "https://barter-system-app-4f110.firebaseio.com",
    projectId: "barter-system-app-4f110",
    storageBucket: "barter-system-app-4f110.appspot.com",
    messagingSenderId: "96428015878",
    appId: "1:96428015878:web:e2a4c807b73ae5b5449e87"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore;
