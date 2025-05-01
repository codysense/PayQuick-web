import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcdnldQ1vs25Ne2UwTur20w3Y7EY8cdMk",
    authDomain: "payquick-payroll-software.firebaseapp.com",
    projectId: "payquick-payroll-software",
    storageBucket: "payquick-payroll-software.firebasestorage.app",
    messagingSenderId: "979009459567",
    appId: "1:979009459567:web:f36d9790786979090f449a",
    measurementId: "G-CX927X17NF"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };