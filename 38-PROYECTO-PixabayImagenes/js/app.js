const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === '') {
        // mensaje de error
        mostrarAlerta('Agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje) {
    const alerta = document.querySelector('.bg-red-100');

    // Si no existe alerta previa
    if(!alerta) {
        const alerta = document.createElement('p');

        alerta.classList.add('bg-red-100', "border-red-400", "text-red-700", "px-4", "py-3", "rounded",  "max-w-lg", "mx-auto", "mt-6", "text-center" );
    
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value;

    const key = '22518787-bf056a1a297f268d97cce0f67';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=30&page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url) 
        .then(respuesta => respuesta.json())
        .then( resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);

            console.log(totalPaginas);

            mostrarImagenes(resultado.hits);
        });
}

function calcularPaginas(total) {
    return parseInt( Math.ceil( total / registrosPorPagina ));
}

// Crear el generador
function *crearPaginacion(total) {
    console.log(total);
    for( let i = 1; i <= total; i++) {
        yield i;
    }
}

function mostrarImagenes(imagenes, paginas ) {

    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach( imagen => {

        const { likes, views, previewURL, largeImageURL } = imagen;
        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
                <div class="bg-white ">
                    <img class="w-full" src=${previewURL} alt={tags} />
                    <div class="p-4">
                        <p class="card-text">${likes}<span class="font-light">Me Gusta</span></p>
                        <p class="card-text">${views} <span class="font-light">Vistas</span> </p>
        
                        <a href=${largeImageURL} 
                        rel="noopener noreferrer" 
                        target="_blank" class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</a>
                    </div>
                </div>
            </div>
            `;
    });


    //Limpiar el paginador previo
    while (paginacionDiv.firstChild) {
        paginacionDiv.removeChild(paginacionDiv.firstChild)
    }

    //Generamos el nuevo html
    imprimirPaginador();
 
}

function imprimirPaginador() {
    // recorrer el iterador
    iterador = crearPaginacion(totalPaginas);
    
    while( true ) {
        const { value, done } = iterador.next();

        if(done) return;

        // Crear botón de sig
        const boton = document.createElement('a');
        boton.href = "#";
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'mb-4', 'font-bold', 'rounded');

        boton.onclick = () => {
            paginaActual = value;

            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}

