const btnLogin = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

correctUsername = "admin";
correctPassword = "admin";

function login(username, password){
    if(username == "admin" && password == "admin"){
        sessionStorage.setItem("name", "Sergio G.");
        alert("Login Successful");
        window.location.href = "../index.html";
    } else {
        alert("Login Failed");
    }
}

btnLogin.addEventListener("click", function() {
    login(username.value, password.value);
});

password.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        login(username.value, password.value);
    }
});