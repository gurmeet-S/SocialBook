
function addUser() {

  email_id = document.getElementById("email_id").value;
  password = document.getElementById("password").value;
  user_name = document.getElementById("user_name").value;
  
    localStorage.setItem("user_name", user_name);

    window.location = "kweets.html";
}

