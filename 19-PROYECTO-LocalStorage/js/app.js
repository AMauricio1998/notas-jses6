const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//event listenert
eventListeners();

function eventListeners()
{
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];
        console.log(tweets);

        crearHtml();
   });
}

// Funciones
function agregarTweet(e)
{
    e.preventDefault();
    
    //text area donde el usuario escrobe
    const tweet = document.querySelector('#tweet').value;
    
    if (tweet === '') {
        mensajeError('No puede ir vacio');
        return;//evita que ese ejecuten las demas lineasd e codigo
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }

    //añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    //Una vez creado agregar el html
    crearHtml();

    //reiniciar formulario
    formulario.reset();
}

function mensajeError(error)
{
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Eliminar alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

function crearHtml()
{
    limpiarHtml();

    if (tweets.length > 0) {
        tweets.forEach( tweet => {
            //agregar boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'x';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear el html
            const li = document.createElement('li');

            //añadir al texto
            li.innerText = tweet.texto;

            //Asignar el boton
            li.appendChild(btnEliminar);

            //agregarlo en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

function sincronizarStorage()
{
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//limpiar html
function limpiarHtml()
{
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

//elimina un tweet
function borrarTweet(id)
{
    tweets = tweets.filter( tweet => tweet.id !== id );
    console.log(tweets);
    
    crearHtml();
}