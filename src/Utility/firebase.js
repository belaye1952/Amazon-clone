import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// configuration for the Firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBXW5S6eDYnfoz8ndtnGDkdb02wLemDONI",
  authDomain: "clone-8c419.firebaseapp.com",
  projectId: "clone-8c419",
  storageBucket: "clone-8c419.firebasestorage.app",
  messagingSenderId: "251852063085",
  appId: "1:251852063085:web:a21cac31179bc7dbaa1a64",
};

// Initialize the Firebase app with the configuration
const app = firebase.initializeApp(firebaseConfig);

// Get the auth instance which is used for authentication
export const auth = getAuth(app);

// Get the Firestore database instance
export const db = app.firestore();

