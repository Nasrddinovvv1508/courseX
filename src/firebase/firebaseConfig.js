import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCR5-vstJpk_QDhp4pb2iKQXoF_idRJLx8",
    authDomain: "coursex-dd29b.firebaseapp.com",
    projectId: "coursex-dd29b",
    storageBucket: "coursex-dd29b.appspot.com",
    messagingSenderId: "242034127387",
    appId: "1:242034127387:web:8359777d05c4ecc732bebe",
    measurementId: "G-QZN81HWF0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
let auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }