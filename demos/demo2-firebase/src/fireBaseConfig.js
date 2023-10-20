// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT_1D0OV-Xhob_hbn_SFZayaGOXVsnTpA",
  authDomain: "tp-redux.firebaseapp.com",
  databaseURL: "https://tp-redux-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tp-redux",
  storageBucket: "tp-redux.appspot.com",
  messagingSenderId: "189923371135",
  appId: "1:189923371135:web:487a8181b14a43b0b3f74a",
  measurementId: "G-L9T1W5B90R"
};

export const BASE_DB_URL = firebaseConfig.databaseURL
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);