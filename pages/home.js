const btnLogin = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

correctUsername = "admin";
correctPassword = "admin";

function log(username, password){
    if(username == "admin" && password == "admin"){
        window.location.href = "../index.html";
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
}

btnLogin.addEventListener("click", function() {
    log(username.value, password.value);
});