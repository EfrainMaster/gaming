const loginForm = document.getElementById("loginform");
const usernameInput = document.getElementById("username");
const passInput = document.getElementById("contraseña");
const usernameL = document.getElementById("usernamel");
const passL = document.getElementById("contraseñal");
const botonL = document.getElementById("boton");
const botonR = document.getElementById("btnR");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value;

    if(username.trim() !== ""){
        usernameInput.remove("hidden");
        passInput.remove("hidden");
        usernameL.remove("hidden");
        passL.remove("hidden");
        botonL.remove("hidden");
        const bienvenida = document.getElementById("bienvenido");
        bienvenida.innerHTML = "Bienvenido, " + username+ " !<br>";
        botonR.style.display = "block";

        

    }else {
        alert("Por favor, ingrese su nombre de usuario.");
    }
});

botonR.addEventListener("click", function(event){
    window.location.reload();
})

