// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import {getAuth,signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

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
const auth = getAuth()
const analytics=getAnalytics(app)

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
    e.preventDefault();
    var obj = {
      email: email.value,
      password: password.value,
    };
  
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function (success) {
        alert("logined Successfully")
        var aaaa =  (success.user.uid);
        localStorage.setItem("uid",aaaa)
        console.log(aaaa)
        
        
        
        window.location.replace('butten.html')
       // localStorage.setItem(success,user,uid)
        
      })
      .catch(function (err) {
        alert("login error"+err);
      });
  
    console.log(obj);
  }