window.onload = () => {
    if(!sessionStorage.username){
        window.location = LOGIN_PAGE;
    } else {
        const h1 = document.getElementById("h1");
        alert("Hola" + " " + sessionStorage.username);

        const juego = document.getElementById("juego");
        juego.setAttribute("src", "./pages/game/index.html?user_id=" + sessionStorage.user_id);
    }
   
};

function logout() {
    sessionStorage.clear();
    redirectTo(LOGIN_PAGE);
}

const btnLogout = document.getElementById("btnLogout");
btnLogout.addEventListener("click", logout);
console.error("Element with id 'btnLogout' not found.");

const LOGIN_PAGE = "./pages/home.html";