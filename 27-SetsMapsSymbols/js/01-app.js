const carrito = new Set();

carrito.add('Camisa');
carrito.add('Gorra');
carrito.add('Gorraasdfs');
carrito.add('Maiz');

console.log( carrito.delete('Camisa')); //Eliminar un elemento

console.log( carrito.has('Camisas') ); //Si un valor exiate en el set

console.log(carrito.size); //Cuanto mide el set

//carrito.clear();//Limpiar todo el set
 carrito.forEach( producto => {
    console.log(producto);
 });

console.log(carrito);

//Del siguinete elemento eliminar los duplicados
const numeros = [10,20,30,40,50,60,10,20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);