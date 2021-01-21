// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD4zm7go5eeYyCHAe7HxEOJhUSTz20eaas",
    authDomain: "let-s-chat-8c800.firebaseapp.com",
    databaseURL: "https://let-s-chat-8c800-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-8c800",
    storageBucket: "let-s-chat-8c800.appspot.com",
    messagingSenderId: "1016878770809",
    appId: "1:1016878770809:web:72a09391cd4f70ebac42a8",
    measurementId: "G-99K9BWSSPF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function add_room(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room"
    });
}