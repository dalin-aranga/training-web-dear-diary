// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJ7Z9Nmmr2KtaTf-0Aw99FmH4F6rc-V4I",
  authDomain: "dear-diary-dalin.firebaseapp.com",
  projectId: "dear-diary-dalin",
  databaseURL: "https://dear-diary-dalin-default-rtdb.firebaseio.com",
  storageBucket: "dear-diary-dalin.appspot.com",
  messagingSenderId: "464210547295",
  appId: "1:464210547295:web:dde3d57546445f9cd781ea",
};
initializeApp(firebaseConfig);

//init service
export const db = getFirestore();

//collection ref
const colRef = collection(db, "diaries");
export default colRef;
