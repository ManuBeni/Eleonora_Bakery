// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgBYtYF0KBFGRs9w-jBfyV6uEKtegMfBU",
  authDomain: "eleonora-bakery.firebaseapp.com",
  projectId: "eleonora-bakery",
  storageBucket: "eleonora-bakery.appspot.com",
  messagingSenderId: "988487775037",
  appId: "1:988487775037:web:a3cbca0677335f333a4b54",
  measurementId: "G-D6L9WV9JGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);