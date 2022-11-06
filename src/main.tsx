import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKd65ckuqptCN0QdyUFIPoUs86ZSmZF5A",
  authDomain: "nutrition-project-9eefd.firebaseapp.com",
  projectId: "nutrition-project-9eefd",
  storageBucket: "nutrition-project-9eefd.appspot.com",
  messagingSenderId: "692810609418",
  appId: "1:692810609418:web:d9edc7f53cf9c23dfe80f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = await firebase.firestore()
let food = await db.collection('mealsdata')
console.log(food.data())
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
