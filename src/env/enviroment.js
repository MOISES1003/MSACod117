import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBfeVLIPt0Tr0w_IqBWrEWbwr3qyZIkgLg",
    authDomain: "msacode117.firebaseapp.com",
    projectId: "msacode117",
    storageBucket: "msacode117.firebasestorage.app",
    messagingSenderId: "452380859081",
    appId: "1:452380859081:web:6b4a7fb4bc2747f75b4b18",
    measurementId: "G-EZY9SR2LLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);