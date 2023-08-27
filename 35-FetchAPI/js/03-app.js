
const cargarJSONArray = document.querySelector('#cargarJSONArray');

// document.addEventListener('DOMContentLoaded', obtenerDatos);

cargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() { 
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => {
            return respuesta.json();
        })
        .then( resultado => {
            mostrarHTML(resultado);
        })
 }

 function mostrarHTML(empleados) { 
     const contenido = document.querySelector('.contenido');

     let html = '';

     empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>Id: ${id}</p>
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Cargo: ${trabajo}</p>
        `;
     });

     contenido.innerHTML = html;
  }