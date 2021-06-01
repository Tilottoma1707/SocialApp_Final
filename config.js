import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDhQjB02UDEeRUqzQ5JymGVf1WZnzJSX08",
    authDomain: "social-app-a6bf7.firebaseapp.com",
    projectId: "social-app-a6bf7",
    storageBucket: "social-app-a6bf7.appspot.com",
    messagingSenderId: "341135955167",
    appId: "1:341135955167:web:0f9b7e3b48526bcaa7856a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()