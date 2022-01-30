// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBLfdT1ke5-lvm-y5hwejR6NkWXr2PIueo",
  authDomain: "chuka-40.firebaseapp.com",
  projectId: "chuka-40",
  storageBucket: "chuka-40.appspot.com",
  messagingSenderId: "473249674338",
  appId: "1:473249674338:web:c08edfdcd78ff1db810d3b",
  measurementId: "G-KT5KHMC1NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth }; 