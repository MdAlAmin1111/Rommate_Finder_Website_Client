import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDKBWiZIqRRnthaxLT7rQ00mg1VhminyeE",
    authDomain: "findmyroomie-1b44f.firebaseapp.com",
    projectId: "findmyroomie-1b44f",
    storageBucket: "findmyroomie-1b44f.firebasestorage.app",
    messagingSenderId: "398812180393",
    appId: "1:398812180393:web:5696ad2af339752449deb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);