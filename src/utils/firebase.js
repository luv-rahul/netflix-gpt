// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYKYbgFIrVyOlqyrAuBaQ_XYZT55J_uV8",
  authDomain: "netflix-gpt-26fbe.firebaseapp.com",
  projectId: "netflix-gpt-26fbe",
  storageBucket: "netflix-gpt-26fbe.firebasestorage.app",
  messagingSenderId: "1051810062856",
  appId: "1:1051810062856:web:bfd1d3ff5f9a95fc1f67bd",
  measurementId: "G-Y2936Z9T7B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
