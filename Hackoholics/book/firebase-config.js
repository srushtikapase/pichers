const firebaseConfig = {
  apiKey: "AIzaSyC8yRy651Cely4xCyjno2i1Uok-_Jnt3w0",
  authDomain: "pitch-1a3c0.firebaseapp.com",
  databaseURL: "https://pitch-1a3c0-default-rtdb.firebaseio.com",
  projectId: "pitch-1a3c0",
  storageBucket: "pitch-1a3c0.firebasestorage.app",
  messagingSenderId: "240686603842",
  appId: "1:240686603842:web:8a69a5111f8de90e2997db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = firebase.firestore();
const auth = firebase.auth();
