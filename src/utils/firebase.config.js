import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-6195d.firebaseapp.com",
  projectId: "react-firebase-redux-6195d",
  storageBucket: "react-firebase-redux-6195d.appspot.com",
  messagingSenderId: "287984055969",
  appId: "1:287984055969:web:4d13d48695c5a9447162e0",
});

export const auth = app.auth();
export default app;
