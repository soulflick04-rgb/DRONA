import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCVXld1aOElvBjzJKLYZt6zwBKB0Idm74Q",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "wavesights.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "wavesights",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "wavesights.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "412254207118",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:412254207118:web:c4763d6c12540396979ddf",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-ZWJ6WR0B79"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);