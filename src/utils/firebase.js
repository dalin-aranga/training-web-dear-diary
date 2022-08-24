// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ7Z9Nmmr2KtaTf-0Aw99FmH4F6rc-V4I",
  authDomain: "dear-diary-dalin.firebaseapp.com",
  projectId: "dear-diary-dalin",
  databaseURL: "https://dear-diary-dalin-default-rtdb.firebaseio.com",
  storageBucket: "dear-diary-dalin.appspot.com",
  messagingSenderId: "464210547295",
  appId: "1:464210547295:web:dde3d57546445f9cd781ea",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
