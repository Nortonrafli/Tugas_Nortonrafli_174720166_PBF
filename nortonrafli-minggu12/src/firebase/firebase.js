import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


    const firebaseConfig = {
        apiKey: "AIzaSyAiQDpd6Cg_1tTIDB7tpPsY0WVGknb9Ayk",
        authDomain: "login-61135.firebaseapp.com",
        databaseURL: "https://login-61135.firebaseio.com",
        projectId: "login-61135",
        storageBucket: "login-61135.appspot.com",
        messagingSenderId: "187593101590",
        appId: "1:187593101590:web:5e75b6c086be1dec890037",
        measurementId: "G-69J6XCMLWD"
      

};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;
