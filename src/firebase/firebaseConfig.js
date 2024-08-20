// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnRxdKWkd0ha4ntnAoBB_gY0LZhltnC6Q",
  authDomain: "smackchat-85c49.firebaseapp.com",
  projectId: "smackchat-85c49",
  storageBucket: "smackchat-85c49.appspot.com",
  messagingSenderId: "893473111011",
  appId: "1:893473111011:web:62fd311831bea638c33ed6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Exporte os serviços
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { firebaseApp, auth, db };
