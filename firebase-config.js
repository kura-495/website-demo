import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-5MSxxahHtcoVEGlJyr7p-5SjxbmyGzo",
  authDomain: "qrlog-36d7a.firebaseapp.com",
  databaseURL: "https://qrlog-36d7a-default-rtdb.firebaseio.com",
  projectId: "qrlog-36d7a",
  storageBucket: "qrlog-36d7a.firebasestorage.app",
  messagingSenderId: "630622697408",
  appId: "1:630622697408:web:23f1abd83f5aeec7a2fa25",
  measurementId: "G-TNF6NQ5D2G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app, db, rtdb, firebaseConfig };
