// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2b4be.firebaseapp.com",
  projectId: "mern-estate-2b4be",
  storageBucket: "mern-estate-2b4be.appspot.com",
  messagingSenderId: "990307439477",
  appId: "1:990307439477:web:9d3a14c1c9fd5c008d793c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
