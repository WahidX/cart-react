import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAnx28qWVCGmp8dUEUctqED9znv5FgTuk",
    authDomain: "cart-web-react.firebaseapp.com",
    databaseURL: "https://cart-web-react.firebaseio.com",
    projectId: "cart-web-react",
    storageBucket: "cart-web-react.appspot.com",
    messagingSenderId: "379460555917",
    appId: "1:379460555917:web:bbbe3504bfa14e0a3afec4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
