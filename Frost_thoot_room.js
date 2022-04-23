var firebaseConfig = {
    apiKey: "AIzaSyAAyfVSCQw_LK-HbMIRttrAZdLX9S0vrQ4",
    authDomain: "FROSTTHOOT-d530a.firebaseapp.com",
    projectId: "FROSTTHOOT-d530a",
    storageBucket: "FROSTTHOOT-d530a.appspot.com",
    messagingSenderId: "913127874181",
    appId: "1:913127874181:web:0e7b67e16e9856273bd3ec",
    measurementId: "G-HB4PQ74CPF"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
