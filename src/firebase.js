// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyALxgkrAJqxNKVeweMaTaYIJNleKnx6iQM",
  authDomain: "ms-clients-2018.firebaseapp.com",
  projectId: "ms-clients-2018",
  storageBucket: "ms-clients-2018.appspot.com",
  messagingSenderId: "142922582903",
  appId: "1:142922582903:web:9b63470c358989dcd3af72",
  measurementId: "G-TPL2XP3RM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth }; 