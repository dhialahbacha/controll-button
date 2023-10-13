
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {getAuth,createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
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
const analytics = getAnalytics(app)



var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword")
window.signup = function (e) {
if(password)

    if(fullName.value == "" || email.value =="" || password.value ==""){
        alert("All Field Are Required")
    }
    if(password.value == copassword.value){
     
    }
    else{
        alert("Password Confirmation is Wrong")
        return false
    }

    e.preventDefault();
    var obj = {
      firstName: fullName.value,
      email: email.value,
      password: password.value,
    };
  
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        window.location.replace('login.html')
      // console.log(success.user.uid)
      alert("signup successfully")
    })
    .catch(function(err){
      alert("Error in " + err)
    });
   console.log()
    console.log(obj);
  };