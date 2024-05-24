// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHDuxZxKlnecF1CcmCDdmptk0Pxp8hC6Q",
  authDomain: "nflixgpt-fe4bd.firebaseapp.com",
  projectId: "nflixgpt-fe4bd",
  storageBucket: "nflixgpt-fe4bd.appspot.com",
  messagingSenderId: "618197798373",
  appId: "1:618197798373:web:602e0ec4f8573dd9ac730c",
  measurementId: "G-4H3HYLTEY5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
