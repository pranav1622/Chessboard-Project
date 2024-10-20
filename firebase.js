// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANSZYf6bOTmyOT03G4rzvvVWhLx4XvSc0",
  authDomain: "chess-project-614.firebaseapp.com",
  projectId: "chess-project-614",
  storageBucket: "chess-project-614.appspot.com",
  messagingSenderId: "851673007575",
  appId: "1:851673007575:web:bdc03da82903fc4d797792",
  measurementId: "G-3YS5TTLX22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
