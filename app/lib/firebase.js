// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqCIhyNviNcSnD6627aUwQ4RDkXhgqMfI",
  authDomain: "humanis-2ae13.firebaseapp.com",
  projectId: "humanis-2ae13",
  storageBucket: "humanis-2ae13.firebasestorage.app",
  messagingSenderId: "142243824080",
  appId: "1:142243824080:web:07610404a383ee59abb9d5",
  measurementId: "G-QV5B1PCGW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;