
import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if (artista === '' || cancion === '') {
        // El usuario nos dejo una opcion vacia
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);
        return;
    }

    // Consultar API

    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}