// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Get the API key from the environment variable
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAueT5D-BomTcr3YOF0xI8sFl3c9cHOG5k",
  authDomain: "blog-web-app-dddef-1cfba.firebaseapp.com",
  projectId: "blog-web-app-dddef",
  storageBucket: "blog-web-app-dddef.appspot.com",
  messagingSenderId: "298094755957",
  appId: "1:298094755957:web:0f705b66da1653a3f2b83c",
  measurementId: "G-H6ZHTJQJFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
