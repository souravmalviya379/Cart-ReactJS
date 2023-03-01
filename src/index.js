import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

// import {initializeApp} from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa9dIEDjHSz22BaPyR8z6azkxlZsseXAs",
  authDomain: "cart-cdcb5.firebaseapp.com",
  projectId: "cart-cdcb5",
  storageBucket: "cart-cdcb5.appspot.com",
  messagingSenderId: "486313254629",
  appId: "1:486313254629:web:d5393d902bfe2b9f9dbe0c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
