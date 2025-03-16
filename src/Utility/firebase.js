import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// configuration for the Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyDcxuE70j4cazoz-U6aTW0DPK3EY9elQKE",
  authDomain: "clone-9cb58.firebaseapp.com",
  projectId: "clone-9cb58",
  storageBucket: "clone-9cb58.firebasestorage.app",
  messagingSenderId: "839451116326",
  appId: "1:839451116326:web:d08bdb27b8abb6eedbf7e7",
  measurementId: "G-KNCHTDQCYF"
};

// Initialize the Firebase app with the configuration
const app = firebase.initializeApp(firebaseConfig);

// Get the auth instance which is used for authentication
export const auth = getAuth(app);

// Get the Firestore database instance
export const db = app.firestore();

