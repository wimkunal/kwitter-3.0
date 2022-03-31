// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzk0lqKHWkQwMvTPTc7tEy6y7kwyB3KXw",
  authDomain: "kwitter-database-e95f8.firebaseapp.com",
  databaseURL: "https://kwitter-database-e95f8-default-rtdb.firebaseio.com",
  projectId: "kwitter-database-e95f8",
  storageBucket: "kwitter-database-e95f8.appspot.com",
  messagingSenderId: "897351498926",
  appId: "1:897351498926:web:7d09610e7100abdb52413f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+" ! ";
 

 function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="Kwitter_page.html";
 }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  room = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'  >#"+Room_names + "</div><hr>";
  document.getElementById("output").innerHTML+= room;


  //End code
  });});}
getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name",name);
  window.location="Kwitter_page.html";
}



function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

function logOut() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}
  