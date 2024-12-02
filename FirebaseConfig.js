import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI29_QreFeKmE74yBZTJUPvfU8VIom6Zw",
    authDomain: "projetandroid-1aa28.firebaseapp.com",
    projectId: "projetandroid-1aa28",
    storageBucket: "projetandroid-1aa28.appspot.com",
    messagingSenderId: "950846412834",
    appId: "1:950846412834:web:7f2f99a2121e7b31a4527b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// iOS : 950846412834-np01iplg4tc9179fihj21pb35n687mb3.apps.googleusercontent.com
// android : 950846412834-bc3iktt5p4ocehji4l5csojbnhtkt9km.apps.googleusercontent.com