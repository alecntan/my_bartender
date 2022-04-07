// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEnPMUrna7p6WtpMl7cXYlzhgHp0NJm64",
  authDomain: "my-bartender-4c41e.firebaseapp.com",
  projectId: "my-bartender-4c41e",
  storageBucket: "my-bartender-4c41e.appspot.com",
  messagingSenderId: "250229161993",
  appId: "1:250229161993:web:57fdadbe8ccdd4b18b38d8",
  measurementId: "G-1NETDTZE48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


