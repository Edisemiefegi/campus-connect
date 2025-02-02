// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  getDocs,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
const storage = getStorage(app);
const db = getFirestore(app);

export {
  auth,
  storage,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  collection,
  addDoc,
  db,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  where,
  onSnapshot,
  getDocs,
  deleteDoc,
  signOut,
  arrayUnion,
};
