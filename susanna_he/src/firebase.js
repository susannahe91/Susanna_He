// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzr3F19S_Vwjedh5CerY0BSkm1YUwXvp8",
  authDomain: "susanna-he.firebaseapp.com",
  projectId: "susanna-he",
  storageBucket: "susanna-he.appspot.com",
  messagingSenderId: "445401094751",
  appId: "1:445401094751:web:7b175c43fdcf7d4d87d9ea",
  measurementId: "G-6GCSB3MTR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);