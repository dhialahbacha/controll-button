// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {  getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGdOIdF5jjvKUWZ5Lvu7rGOaLPgzhMCEo",
  authDomain: "smart-38cea.firebaseapp.com",
  databaseURL: "https://smart-38cea-default-rtdb.firebaseio.com",
  projectId: "smart-38cea",
  storageBucket: "smart-38cea.appspot.com",
  messagingSenderId: "1035514141846",
  appId: "1:1035514141846:web:ac0401a875d27621a976b7",
  measurementId: "G-KZZNY5YDCG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const doorLockRef = ref(db, 'smart');

const analytics = getAnalytics(app);
const auth = getAuth();
window.logout = function () {
    signOut(auth)
      .then(function () {
        alert("Logout Successfully");
        window.location.href = "login.html";
      })
      .catch(function (err) {
        console.log(err);
      });
  };


// Function to unlock the door
function unlockDoor() {
  doorLockRef.set(true);
}

// Function to lock the door
function lockDoor() {
  doorLockRef.set(false);
}

// Attach event listeners to the buttons
document.getElementById('unlockApt').addEventListener('click', unlockDoor);
document.getElementById('lockApt').addEventListener('click', lockDoor);
