// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC2iCOMeGbfP1ck1iNLN27FEBhIYJW6DQ",
  authDomain: "todoapplicationetp-9b845.firebaseapp.com",
  projectId: "todoapplicationetp-9b845",
  storageBucket: "todoapplicationetp-9b845.appspot.com",
  messagingSenderId: "982723056219",
  appId: "1:982723056219:web:f1ff9ee4acac73683fe57e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);