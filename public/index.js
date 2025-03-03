window.onload = () => {
    if(!sessionStorage.name){
        window.location = "./pages/home.html";
    } else {
        const h1 = document.getElementById("h1");
        alert("hola" + " " + sessionStorage.name);
    }
   
};

function logout(){
    sessionStorage.clear();
    window.location = "./pages/home.html";
}

btnLogout.addEventListener("click", function() {
    logout();
});