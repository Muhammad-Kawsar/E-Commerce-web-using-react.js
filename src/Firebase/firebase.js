// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-NdJlYnXFBcJSDvDdJcNtCETzOGlIBMY",
  authDomain: "ecommerce-firebase-53982.firebaseapp.com",
  projectId: "ecommerce-firebase-53982",
  storageBucket: "ecommerce-firebase-53982.firebasestorage.app",
  messagingSenderId: "764522602044",
  appId: "1:764522602044:web:e83c332f233be1db92ad39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);