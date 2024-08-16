import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdS2tUhxMNSgEFMiE863BVVyjNR6MTNSA",
    authDomain: "buysellscorner.firebaseapp.com",
    projectId: "buysellscorner",
    storageBucket: "buysellscorner.appspot.com",
    messagingSenderId: "409157240469",
    appId: "1:409157240469:web:eee149a4599fe5c71f3d9c",
    measurementId: "G-GTEL49KNP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

