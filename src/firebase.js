import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyD94Me1oOl4Pc4y2pulHF9rR7tZun9_w4Q",
    authDomain: "linkedin-clone-2f3a6.firebaseapp.com",
    projectId: "linkedin-clone-2f3a6",
    storageBucket: "linkedin-clone-2f3a6.appspot.com",
    messagingSenderId: "61961429477",
    appId: "1:61961429477:web:b12bff6f1a1835f4e60f0c",
    measurementId: "G-3DMYMXGX7B",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };