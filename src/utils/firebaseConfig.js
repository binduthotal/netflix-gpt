// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ-z0V7ZXHE4Ud17NfUpVRKnIBpOTcF6Y",
  authDomain: "netflixgpt-b3bbf.firebaseapp.com",
  projectId: "netflixgpt-b3bbf",
  storageBucket: "netflixgpt-b3bbf.appspot.com",
  messagingSenderId: "210358114717",
  appId: "1:210358114717:web:32bf7611ef34f13b6d7774",
  measurementId: "G-DLD9R5495Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();