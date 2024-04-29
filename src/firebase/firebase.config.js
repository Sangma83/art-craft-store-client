// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwqY0dXRZMmg4DnNyeLO-FWX9yGQ7Ybhs",
  authDomain: "art-craft-store-client-3b4ed.firebaseapp.com",
  projectId: "art-craft-store-client-3b4ed",
  storageBucket: "art-craft-store-client-3b4ed.appspot.com",
  messagingSenderId: "959041057115",
  appId: "1:959041057115:web:0138b759f04e29f5adea7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;