const btnLogin = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const url = "http://localhost:5000";

//correctUsername = "admin";
//correctPassword = "admin";

const login = async () => {
    const user = { username: username.value, password: password.value };
    const respuesta = await fetch(url + "/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user),
    });
    const data = await respuesta.json();
    if(data.isLogin){
        sessionStorage.setItem("user_id", data.user.user_id);
        sessionStorage.setItem("username", data.user.username);
        alert("Login Successful");
        window.location.href = "../index.html?user_id=" + data.user.user_id;
    } else {
        alert("Login Failed");
    }
};

btnLogin.addEventListener("click", function() {
    login();
});

password.addEventListener("keydown", (e) => {
    if(e.key == "Enter"){
        login();
    }
});
