const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e) { 
    e.preventDefault();
    

    //Validar formulario
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        //Hubo un error
        mostrarHerror('Ambos campos son obligatorios');

        return;
    }

    //Consultar la API
    consultarAPI(ciudad, pais);
 }


 function mostrarHerror(mensaje) { 
    const alerta = document.querySelector('.bg-red-100');

    if (!alerta) {
        //Crear alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
           <strong class="font-bold">Error!</strong>
           <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);   

        //Eliminar alerta despues de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
    }
  }

  function consultarAPI(ciudad, pais) {

    const appId = 'a03aedac1d79806e7b6bb60f42cab44c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    spinner();
    fetch(url)
        .then( respuesta => {
            return respuesta.json();
        })
        .then( datos => {
            console.log(datos);
            //Limpiar html previo
            limpiarHTML();
            if (datos.cod === "404") {
                mostrarHerror('Ciudad no encontrada');
                return;
            }

            //Muestra la informacion en el HTML
            mostrarClima(datos);
        })
  }

const kelvinACentigrados = grados => parseInt(grados - 273.15);

function mostrarClima(datos) { 
    const { name, sys:{ country }, main:{ temp, temp_max, temp_min} } = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}, ${country}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');

    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Max: ${ max } &#8451;`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Min: ${ min } &#8451;`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMin);
    resultadoDiv.appendChild(tempMax);

    resultado.appendChild(resultadoDiv);
}

function limpiarHTML() { 
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
 }

 function spinner() { 
     limpiarHTML();
     const divSpinner = document.createElement('div');
     divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(divSpinner);
  }