// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS9EFEbZFIoeJCsOVtCSiVHI4qR4pNQVA",
  authDomain: "scencrafto.firebaseapp.com",
  projectId: "scencrafto",
  storageBucket: "scencrafto.appspot.com",
  messagingSenderId: "517898367083",
  appId: "1:517898367083:web:4c2361ab584772d0ed812e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);