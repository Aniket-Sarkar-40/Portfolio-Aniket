// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcHU_KsQiZP6oUwwtomAEhStwN-wDx-6k",
  authDomain: "aniket-sarkar-portfolio.firebaseapp.com",
  projectId: "aniket-sarkar-portfolio",
  storageBucket: "aniket-sarkar-portfolio.appspot.com",
  messagingSenderId: "129004559385",
  appId: "1:129004559385:web:38109caabd6a1ffa045e88",
  measurementId: "G-L83H303LDR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
