const btnLogin = document.getElementById("btnLogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

const url = "http://localhost:5000";

correctUsername = "admin";
correctPassword = "admin";

const login = async () => {
    const user = { username: username.value, password: password.value };
    const respuesta = await fetch(url + "/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(user),
    });
    const data = await respuesta.json();
    if(data.isLogin){
        sessionStorage.setItem("id", data.user.id);
        sessionStorage.setItem("name", data.user.name);
        alert("Login Successful");
        window.location.href = "../index.html?id=" + data.user.id;
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
