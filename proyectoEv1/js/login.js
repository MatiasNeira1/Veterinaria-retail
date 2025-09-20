// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault(); // Prevenir el envío del formulario y recarga de la página

    // Obtener los valores del formulario
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validación básica para el correo
    if (!correo.includes("@")) {
        alert("El correo debe contener '@'");
        return; // Detener ejecución si el correo no es válido
    }

    // Validación básica para la contraseña
    if (password.trim() === "") {
        alert("La contraseña no puede estar vacía.");
        return; 
    }

    console.log("Correo y contraseña válidos");

    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            new Notification("Haz iniciado sesión");
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    new Notification("Haz iniciado sesión");
                }
            });
        }
    }

   
    setTimeout(function() {
        window.location.href = "Menu.html"; 
    }, 1500); 
}

let registros = JSON.parse(localStorage.getItem("usuarios")) || [];


function register(event) {
    event.preventDefault(); 

    var name = document.getElementById("names").value;
    var last_names = document.getElementById("last_names").value;
    var number = document.getElementById("number").value;
    var correo = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!name || !last_names || !number || !correo || !password) {
        alert("No pueden haber campos vacíos");
        return;
    }

    if (!correo.includes('@')) {
        alert("El correo debe contener '@'");
        return; 
    }

    let RegistroNuevo = {
        name: name,
        last_names: last_names,
        number: number,
        correo: correo,
        password: password
    }

    registros.push(RegistroNuevo);

    localStorage.setItem("usuarios", JSON.stringify(registros));
    
    document.getElementById("form_register").reset();

    window.location.href = "Menu.html";
    console.log("Registro exitoso, redirigiendo...");
}
