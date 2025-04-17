// firebase.js
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    authDomain: "AIzaSyDR3LXaUCfrEaFbjhqBoR8DFsyZ9HzqUyk",
  authDomain: "water-watch-2c81b.firebaseapp.com",
  projectId:"water-watch-2c81b",
  storageBucket: "water-watch-2c81b.firebasestorage.app",
  messagingSenderId: "454493037046",
  appId: "1:454493037046:web:c85a701321b28855a427d7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;
// This file initializes Firebase and exports the Firestore database instance for use in other parts of your application.
