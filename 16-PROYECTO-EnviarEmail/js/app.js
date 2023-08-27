//variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//variebles para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos de formulario
    email.addEventListener('blur', validarFomulario);
    asunto.addEventListener('blur', validarFomulario);
    mensaje.addEventListener('blur', validarFomulario);

    //reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario);

    //Enviar email
    formulario.addEventListener('submit', enviarEmail);
}


//funciones
function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//valida el formulario
function validarFomulario(e) {
    // e.target hace referencia al campo actual
    if (e.target.value.length > 0) {
        //Elimina los errores
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        // e.target.style.borderBottomColor = 'red';
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarEror('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {

        if (er.test( e.target.value )) {
            //Elimina los errores
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarEror('Email no valido');
        }
    }

    if (er.test( email.value ) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 
}

function mostrarEror(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    //querySelectorAll retorna una coleccion de elementos
    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        // formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
        formulario.appendChild(mensajeError);
    }
}

function enviarEmail(e) {
    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //depuses de tres segundos ocultar spinner y mostrar mensaje
    // setInterval se ejecuta cada 3 segundos
    setTimeout(() => {
        spinner.style.display = 'none';

        //mensaje de envio correcto
        const parrafo = document.createElement('p');
        parrafo.textContent = 'Se envio correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        //inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove(); // eliminar el mensaje de exito

            resetearFormulario();
        }, 5000);
    }, 3000);
}

// funcion que resetea el formulario
function resetearFormulario(e) {
    e.preventDefault();
    formulario.reset();

    iniciarApp();
}