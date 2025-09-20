// Función para manejar el inicio de sesión
function login(event) {
    event.preventDefault(); 

    // Obtener valores del formulario
    var correo = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Validaciones básicas
    if (!correo.includes("@")) {
        alert("El correo debe contener '@'");
        return;
    }

    if (password === "") {
        alert("La contraseña no puede estar vacía.");
        return;
    }

    // Verificar si es admin
    if (correo === "admin@cachupin.cl" && password === "admin") {
        mostrarNotificacion("Has iniciado sesión como administrador");

        // Guardar en localStorage que es admin
        localStorage.setItem("isAdmin", "true");

        setTimeout(function() {
            window.location.href = "admin.html";
        }, 1500);
        return;
    }

    // Verificar en usuarios registrados (localStorage)
    let registros = JSON.parse(localStorage.getItem("usuarios")) || [];
    let usuarioValido = registros.find(usuario => usuario.correo === correo && usuario.password === password);

    if (usuarioValido) {
        mostrarNotificacion("Has iniciado sesión correctamente");

        // Guardar que NO es admin
        localStorage.setItem("isAdmin", "false");

        setTimeout(function() {
            window.location.href = "Menu.html";
        }, 1500);
    } else {
        alert("Correo o contraseña incorrectos. Intenta nuevamente.");
    }
}

// Función para mostrar notificaciones del navegador
function mostrarNotificacion(mensaje) {
    if ("Notification" in window) {
        if (Notification.permission === "granted") {
            new Notification(mensaje);
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function(permission) {
                if (permission === "granted") {
                    new Notification(mensaje);
                }
            });
        }
    }
}
let registros = JSON.parse(localStorage.getItem("usuarios")) || [];

function register(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById("names").value.trim();
    const lastNames = document.getElementById("last_names").value.trim();
    const number = document.getElementById("number").value.trim();
    const correo = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación de campos vacíos
    if (!name || !lastNames || !number || !correo || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validar formato de correo
    if (!correo.includes("@")) {
        alert("El correo debe contener '@'.");
        return;
    }

    // Validar si el correo ya está registrado
    const existe = registros.some(user => user.correo === correo);
    if (existe) {
        alert("Este correo ya está registrado.");
        return;
    }

    // Crear el objeto de usuario
    const nuevoUsuario = {
        name: name,
        lastNames: lastNames,
        number: number,
        correo: correo,
        password: password
    };

    // Guardar en el array y en localStorage
    registros.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(registros));

    // Resetear el formulario
    document.getElementById("form_register").reset();

    // Confirmar y redirigir
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
}




