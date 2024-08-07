// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWXd7PaKWu4j2hbeYk6o4-UP9eaWHcooQ",
  authDomain: "pantry-db-mgmt.firebaseapp.com",
  projectId: "pantry-db-mgmt",
  storageBucket: "pantry-db-mgmt.appspot.com",
  messagingSenderId: "463852232436",
  appId: "1:463852232436:web:538093d4aefafedef388a1",
  measurementId: "G-XSS2EK9MZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };