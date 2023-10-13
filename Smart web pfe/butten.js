$(document).ready(function() {
	var Led1Status;
	var firebaseConfig = {
	apiKey: "AIzaSyBGdOIdF5jjvKUWZ5Lvu7rGOaLPgzhMCEo",
	authDomain: "smart-38cea.firebaseapp.com",
	databaseURL: "https://smart-38cea-default-rtdb.firebaseio.com",
	projectId: "smart-38cea",
	storageBucket: "smart-38cea.appspot.com",
	messagingSenderId: "1035514141846",
	appId: "1:1035514141846:web:ac0401a875d27621a976b7",
	measurementId: "G-KZZNY5YDCG"}
	firebase.initializeApp(firebaseConfig);
	var database = firebase.database();
  

	database.ref().child("Led1Status").on("value", function(snapshot) {
		Led1Status = snapshot.val();
	
		if (Led1Status === "ON") {
		  document.getElementById("unact").style.display = "none";
		  document.getElementById("act").style.display = "block";
		 
		} else {
		  document.getElementById("unact").style.display = "block";
		  document.getElementById("act").style.display = "none";
		}
	  });
	
	  $(".toggle-btn").click(function() {
		var firebaseRef = database.ref().child("Led1Status");
	
		if (Led1Status === "ON") {
		  firebaseRef.set("OFF");
		  Led1Status = "OFF";
		  
		} else {
		  firebaseRef.set("ON");
		  Led1Status = "ON";
		}
	  });
	});