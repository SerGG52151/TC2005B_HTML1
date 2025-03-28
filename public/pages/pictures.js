window.onload = () => {
    if(!sessionStorage.username){
        window.location = "home.html";
    } else {
        const h1 = document.getElementById("h1");
        alert("hola" + " " + sessionStorage.username);
    }
   
};

function logout(){
    sessionStorage.clear();
    window.location = "home.html";
}

btnLogout.addEventListener("click", function() {
    logout();
});