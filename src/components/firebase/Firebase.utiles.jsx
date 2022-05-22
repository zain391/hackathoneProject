// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzfdsW9zHSGK-5cLnyGfTWVMJa-3mPSAA",
  authDomain: "fir-diploy.firebaseapp.com",
  projectId: "fir-diploy",
  storageBucket: "fir-diploy.appspot.com",
  messagingSenderId: "713363521897",
  appId: "1:713363521897:web:0f8d7ff4bdc4ac8e557df8",
  measurementId: "G-DMH2RKVLQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore , auth}