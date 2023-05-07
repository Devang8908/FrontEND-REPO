 // Import the functions you need from the SDKs you need
 import firebase from 'firebase/compat/app';
 import 'firebase/compat/firestore';
 import 'firebase/compat/auth';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4b5xI5zxa8tba9VlPsfY-_cDVXiJTdRQ",
    authDomain: "clone-d1ea0.firebaseapp.com",
    projectId: "clone-d1ea0",
    storageBucket: "clone-d1ea0.appspot.com",
    messagingSenderId: "953879971989",
    appId: "1:953879971989:web:7ce585117eadfb384f339c",
    measurementId: "G-XWVCJHRJKD"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
//const analytics = getAnalytics(firebaseApp);
export{db,auth,firebaseApp};