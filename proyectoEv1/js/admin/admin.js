// admin.js

document.addEventListener('DOMContentLoaded', () => {
  // Elementos comunes
  const dashboard = {
    productos: document.querySelector('#card-productos strong'),
    usuarios: document.querySelector('#card-usuarios strong'),
    pedidos: document.querySelector('#card-pedidos strong'),
    planes: document.querySelector('#card-planes strong'),
  };

  // Actualizar contadores en dashboard
  function actualizarDashboard() {
    dashboard.productos.textContent = document.querySelectorAll('#productos tbody tr').length;
    dashboard.usuarios.textContent = document.querySelectorAll('#usuarios tbody tr').length;
    dashboard.pedidos.textContent = document.querySelectorAll('#ordenes tbody tr').length;
    dashboard.planes.textContent = document.querySelectorAll('#planes tbody tr').length;
  }

  actualizarDashboard();

  // Función para crear botones Editar y Eliminar con sus eventos
  function crearBotonesAccion(tr, tipo) {
    // Botón Editar
    const btnEditar = document.createElement('button');
    btnEditar.textContent = 'Editar';
    btnEditar.addEventListener('click', () => editarFila(tr, tipo));

    // Botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
      if (confirm(`¿Seguro quieres eliminar este ${tipo}?`)) {
        tr.remove();
        actualizarDashboard();
      }
    });

    // Vaciar celda y añadir botones
    const accionesTd = tr.querySelector('td:last-child');
    accionesTd.innerHTML = '';
    accionesTd.appendChild(btnEditar);
    accionesTd.appendChild(document.createTextNode(' ')); // espacio
    accionesTd.appendChild(btnEliminar);
  }

  // Función para editar fila: transforma celdas en inputs para editar
  function editarFila(tr, tipo) {
    // Evitar editar si ya está en modo edición
    if (tr.classList.contains('editando')) return;

    tr.classList.add('editando');
    const celdas = tr.querySelectorAll('td');
    // No editar la celda ID (primer td)
    for (let i = 1; i < celdas.length - 1; i++) {
      const texto = celdas[i].textContent;
      let input;
      if (tipo === 'pedido' && (i === 3)) { // Estado es select en pedidos
        input = document.createElement('select');
        ['En proceso', 'Completado', 'Cancelado'].forEach(opt => {
          const option = document.createElement('option');
          option.value = opt;
          option.textContent = opt;
          if (opt === texto) option.selected = true;
          input.appendChild(option);
        });
      } else if (tipo === 'configuracion') {
        // No se edita aquí
      } else {
        input = document.createElement('input');
        input.type = 'text';
        input.value = texto;
      }
      celdas[i].textContent = '';
      celdas[i].appendChild(input);
    }

    // Cambiar botones a Guardar / Cancelar
    const accionesTd = tr.querySelector('td:last-child');
    accionesTd.innerHTML = '';

    const btnGuardar = document.createElement('button');
    btnGuardar.textContent = 'Guardar';
    btnGuardar.addEventListener('click', () => guardarEdicion(tr, tipo));

    const btnCancelar = document.createElement('button');
    btnCancelar.textContent = 'Cancelar';
    btnCancelar.addEventListener('click', () => cancelarEdicion(tr, tipo));

    accionesTd.appendChild(btnGuardar);
    accionesTd.appendChild(document.createTextNode(' '));
    accionesTd.appendChild(btnCancelar);
  }

  // Guardar edición: toma valores de inputs y los guarda en celdas
  function guardarEdicion(tr, tipo) {
    const celdas = tr.querySelectorAll('td');
    for (let i = 1; i < celdas.length - 1; i++) {
      const input = celdas[i].querySelector('input, select');
      if (input) {
        celdas[i].textContent = input.value;
      }
    }
    tr.classList.remove('editando');
    crearBotonesAccion(tr, tipo);
    actualizarDashboard();
  }

  // Cancelar edición: vuelve a mostrar texto original sin cambios
  function cancelarEdicion(tr, tipo) {
    // Aquí simplemente recargamos la fila (podrías guardar los datos originales para más seguridad)
    // Por simplicidad: recarga la fila borrando edición sin guardar
    // Como no guardamos datos originales, para mejor UX debes guardar antes
    // Pero aquí simplemente removemos inputs y dejamos valores actuales
    const celdas = tr.querySelectorAll('td');
    for (let i = 1; i < celdas.length - 1; i++) {
      const input = celdas[i].querySelector('input, select');
      if (input) {
        celdas[i].textContent = input.defaultValue || input.value; 
      }
    }
    tr.classList.remove('editando');
    crearBotonesAccion(tr, tipo);
  }

  // Añadir nuevo elemento a tabla (abre prompt para simplicidad)
  function agregarElemento(seccion) {
    let tabla = document.querySelector(`#${seccion} tbody`);
    let nuevaFila = document.createElement('tr');

    // Según sección, se crean celdas diferentes:
    switch(seccion) {
      case 'productos': {
        const id = prompt('ID Producto:');
        if (!id) return;
        const nombre = prompt('Nombre:');
        if (!nombre) return;
        const categoria = prompt('Categoría:');
        if (!categoria) return;
        const precio = prompt('Precio:');
        if (!precio) return;
        const stock = prompt('Stock:');
        if (!stock) return;
        nuevaFila.innerHTML = `
          <td>${id}</td>
          <td>${nombre}</td>
          <td>${categoria}</td>
          <td>${precio}</td>
          <td>${stock}</td>
          <td></td>
        `;
        crearBotonesAccion(nuevaFila, 'producto');
        tabla.appendChild(nuevaFila);
        break;
      }
      case 'usuarios': {
        const id = prompt('ID Usuario:');
        if (!id) return;
        const nombre = prompt('Nombre:');
        if (!nombre) return;
        const email = prompt('Email:');
        if (!email) return;
        const rol = prompt('Rol:');
        if (!rol) return;
        nuevaFila.innerHTML = `
          <td>${id}</td>
          <td>${nombre}</td>
          <td>${email}</td>
          <td>${rol}</td>
          <td></td>
        `;
        crearBotonesAccion(nuevaFila, 'usuario');
        tabla.appendChild(nuevaFila);
        break;
      }
      case 'planes': {
        const id = prompt('ID Plan:');
        if (!id) return;
        const nombre = prompt('Nombre:');
        if (!nombre) return;
        const precio = prompt('Precio:');
        if (!precio) return;
        const duracion = prompt('Duración:');
        if (!duracion) return;
        nuevaFila.innerHTML = `
          <td>${id}</td>
          <td>${nombre}</td>
          <td>${precio}</td>
          <td>${duracion}</td>
          <td></td>
        `;
        crearBotonesAccion(nuevaFila, 'plan');
        tabla.appendChild(nuevaFila);
        break;
      }
      case 'publicaciones': {
        const id = prompt('ID Publicación:');
        if (!id) return;
        const titulo = prompt('Título:');
        if (!titulo) return;
        const fecha = prompt('Fecha (YYYY-MM-DD):');
        if (!fecha) return;
        const autor = prompt('Autor:');
        if (!autor) return;
        nuevaFila.innerHTML = `
          <td>${id}</td>
          <td>${titulo}</td>
          <td>${fecha}</td>
          <td>${autor}</td>
          <td></td>
        `;
        crearBotonesAccion(nuevaFila, 'publicacion');
        tabla.appendChild(nuevaFila);
        break;
      }
      default:
        alert('Sección no soportada para agregar elementos');
    }

    actualizarDashboard();
  }

  // Eventos para botones agregar
  document.querySelectorAll('.btn-agregar').forEach(btn => {
    btn.addEventListener('click', () => {
      // Detectar sección padre (el id del section)
      const seccion = btn.closest('section').id;
      agregarElemento(seccion);
    });
  });

  // Inicializar botones editar/eliminar existentes
  function inicializarBotones() {
    // Productos
    document.querySelectorAll('#productos tbody tr').forEach(tr => crearBotonesAccion(tr, 'producto'));
    // Usuarios
    document.querySelectorAll('#usuarios tbody tr').forEach(tr => crearBotonesAccion(tr, 'usuario'));
    // Planes
    document.querySelectorAll('#planes tbody tr').forEach(tr => crearBotonesAccion(tr, 'plan'));
    // Publicaciones
    document.querySelectorAll('#publicaciones tbody tr').forEach(tr => crearBotonesAccion(tr, 'publicacion'));
  }

  inicializarBotones();

  // Configuración formulario
  const configForm = document.getElementById('config-form');
  configForm.addEventListener('submit', e => {
    e.preventDefault();

    const siteName = configForm.siteName.value.trim();
    const emailAdmin = configForm.emailAdmin.value.trim();
    const notifications = configForm.notifications.checked;

    // Aquí puedes guardar en localStorage o enviar a backend.
    alert(`Configuración guardada:\n- Nombre sitio: ${siteName}\n- Email admin: ${emailAdmin}\n- Notificaciones: ${notifications ? 'Activadas' : 'Desactivadas'}`);
  });

  // Logout function
  window.logout = function() {
    if(confirm('¿Quieres cerrar sesión?')) {
      // Aquí puede ir código para cerrar sesión real, por ejemplo, limpiar tokens, redirigir, etc.
      alert('Sesión cerrada');
      // Simular redireccionar a login
      window.location.href = '/login.html';
    }
  };
});
