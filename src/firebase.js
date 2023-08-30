// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSJC0VTSSPCZXUvntbSRc4g8Y9uIYn9tk",
  authDomain: "react-portfolio-sameer.firebaseapp.com",
  projectId: "react-portfolio-sameer",
  storageBucket: "react-portfolio-sameer.appspot.com",
  messagingSenderId: "196243317285",
  appId: "1:196243317285:web:5b68f0cfa0cd819150d5cc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();