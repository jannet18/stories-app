// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAM5q43XfOVvC2F1uH8y8n-QezPa7N7cyU",
    authDomain: "stories-react-app-f7c22.firebaseapp.com",
    projectId: "stories-react-app-f7c22",
    storageBucket: "stories-react-app-f7c22.appspot.com",
    messagingSenderId: "797954435838",
    appId: "1:797954435838:web:fd32e93d82ccc72e9053af",
    measurementId: "G-4EKDTGH081"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  // const auth = firebase.auth();
  export { db };