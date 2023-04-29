import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZMkw2Vgpg2TmoVNf6mcKLW0Z-_umx_vI",
    authDomain: "beats-by-jay.firebaseapp.com",
    projectId: "beats-by-jay",
    storageBucket: "beats-by-jay.appspot.com",
    messagingSenderId: "1010813318297",
    appId: "1:1010813318297:web:bbffbc3db0aa67597db408",
    measurementId: "G-1ZCLC5Y3ZH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db,auth }