// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKySNPFOZnUJDv5Vj50BfPgfvh6wK8M0c",
  authDomain: "campus-connect-a985e.firebaseapp.com",
  projectId: "campus-connect-a985e",
  storageBucket: "campus-connect-a985e.appspot.com",
  messagingSenderId: "352021341261",
  appId: "1:352021341261:web:f4a9b4472dac09d9a12804",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
};
