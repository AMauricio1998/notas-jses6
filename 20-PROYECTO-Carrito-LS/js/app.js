const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //eliminar curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra cursos guardados en localStotage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    //vaciar carrito
    vaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];//reseteamos el arreglo

        limpiaHTML();
    });
}

//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito') ) {
        //Acceso al div de todo el contenido del curso seleccionado
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
}

//Elimina datos del curso
function eliminarCurso(e) {
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); //iterar sobre el carrito y mostrar su HTML
    }
}

// Lee el contenido del html al que le dimos clicky extrae su informacion
function leerDatosCurso(curso) {
    // console.log(curso);

    // crear un objeto con el curso del contenido actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if (existe) {
          //Identificar producto repetido y aumentar la cantidad
          const cursos = articulosCarrito.map( curso =>{
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso; //retorna objeto actualizado
            }else{
                return curso;// retorna los cursos no estan duplicados
            }
          });
          articulosCarrito = [...cursos];
    }else{
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso]; 
    }

    console.log(articulosCarrito);

    carritoHTML();
}


//Muestra el carrito de compras en el HTML
function carritoHTML() {
    //Limpiar el html

    limpiaHTML();

    //recorre el carrito y genera HTML
    articulosCarrito.forEach( (curso) => {
        const { imagen, titulo, precio, cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
               <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `
        contenedorCarrito.appendChild(row);
    });

    //Agregar elementos al localStorage
    sincronizarStorage();
}

function sincronizarStorage()
{
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function limpiaHTML() {
    //Forma lenta
    // contenedorCarrito.innerHTML = '';

    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}