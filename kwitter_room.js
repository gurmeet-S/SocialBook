var firebaseConfig = {
  apiKey: "AIzaSyD52CA0pS6g97P00cBxY_X2LOxOvyYGsA0",
  authDomain: "kwitter-9b370.firebaseapp.com",
  databaseURL: "https://kwitter-9b370-default-rtdb.firebaseio.com",
  projectId: "kwitter-9b370",
  storageBucket: "kwitter-9b370.appspot.com",
  messagingSenderId: "921151934513",
  appId: "1:921151934513:web:dd24f38ce13d85c8860510",
  measurementId: "G-SX55DN5VV5"
};
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
