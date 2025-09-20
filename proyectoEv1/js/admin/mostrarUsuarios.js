
const tbody = document.querySelector("#tablaUsuarios tbody");


function mostrarUsuarios() {
  tbody.innerHTML = ""; 

  registros.forEach(usuario => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${usuario.name}</td>
      <td>${usuario.last_names}</td>
      <td>${usuario.number}</td>
      <td>${usuario.correo}</td>
    `;
    tbody.appendChild(fila);
  });
}

mostrarUsuarios();
