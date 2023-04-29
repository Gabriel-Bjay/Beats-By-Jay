// Import the functions you need from the SDKs you need

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZMkw2Vgpg2TmoVNf6mcKLW0Z-_umx_vI",
  authDomain: "beats-by-jay.firebaseapp.com",
  projectId: "beats-by-jay",
  storageBucket: "beats-by-jay.appspot.com",
  messagingSenderId: "1010813318297",
  appId: "1:1010813318297:web:bbffbc3db0aa67597db408",
  measurementId: "G-1ZCLC5Y3ZH"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// Initialize Firebase

