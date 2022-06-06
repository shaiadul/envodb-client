// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ33TCULBnxQUqzt7ZZBB0gH1zaZHVApY",
  authDomain: "assignment-eleven-11.firebaseapp.com",
  projectId: "assignment-eleven-11",
  storageBucket: "assignment-eleven-11.appspot.com",
  messagingSenderId: "445445826279",
  appId: "1:445445826279:web:f453d679656096ed116442",
  measurementId: "G-0WYH6D1TCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
