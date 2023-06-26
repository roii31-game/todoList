import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAJCoETg7NRIMxmD3LQB_ccwHMj92LuKVQ",

    authDomain: "todoapp-4e240.firebaseapp.com",
  
    projectId: "todoapp-4e240",
  
    storageBucket: "todoapp-4e240.appspot.com",
  
    messagingSenderId: "617987953852",
  
    appId: "1:617987953852:web:7b819dc6ad94b707316cb9",
  
    measurementId: "G-J4WG5JC7Z2"
  
};


export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

// Not using it

// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


