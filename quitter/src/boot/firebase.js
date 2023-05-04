// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1M1c8rfJ1DV034tBoAz8zY_BKpaLa-oY",
  authDomain: "quitter-c5a7c.firebaseapp.com",
  projectId: "quitter-c5a7c",
  storageBucket: "quitter-c5a7c.appspot.com",
  messagingSenderId: "1002027911396",
  appId: "1:1002027911396:web:92c726783de9d2015a84f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// access firebase database with db variable
const db = firebase.firestore()

export default db
