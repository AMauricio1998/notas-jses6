
localStorage.setItem('nombre', 'MAuricio');

//objeto
const producto = {
    nombre: 'Alan Mauricio Reyes',
    precio: 50
}

const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

//Arreglo
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
localStorage.setItem('meses', JSON.stringify( meses ));