//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//generar objeto con datos de busqueda
const datosBusqueda = {
    marca: '',
	year: '',
	minimo: '', 
	maximo: '', 
	puertas: '',
	color: '',
	transmision: ''
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);//Muestra los años al cargar
    
    //llena la opcion de año
    llenarSelect();
});

// event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);//comvertir de string a entero al año

    filtrarAuto();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//Funciones
function mostrarAutos(autos)
{
    limpiarHtml();//elimina html previo

    autos.forEach( auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent = `
            ${marca} ${modelo} - año: ${year} - Precio: ${precio}mxn - ${puertas} puertas - ${color} - Transmision: ${transmision}
        `;

        //insertar en el html
        resultado.appendChild(autoHtml);
    })
}

//limpiar html
function limpiarHtml(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

//Genera los años del select
function llenarSelect()
{
    for( let i = max; i >= min; i-- ) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agregar opciones de año al select
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto()
{
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas).filter( filtrarTransmision ).filter( filtrarColor );
    console.log(resultado);


    if (resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}
function noResultado() {

    limpiarHtml();
    
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No se encontraron resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto)
{   
    if ( datosBusqueda.marca ) {
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarYear(auto)
{
    if ( datosBusqueda.year ) {
        return auto.year === datosBusqueda.year;
    }
    return auto;
}
function filtrarMinimo(auto)
{
    if ( datosBusqueda.minimo ) {
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto)
{
    if ( datosBusqueda.maximo ) {
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto)
{
    if (datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}
function filtrarTransmision(auto)
{
    if (datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}
function filtrarColor(auto)
{
    if (datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    }
    return auto;
}