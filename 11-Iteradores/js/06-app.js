// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach( (pendiente, index) =>  {
    console.log(`${index} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer arreglo de objetos
const carrito = [
    {id: 1, nombre: 'Libro' },
    {id: 2, nombre: 'Camisa'},
    {id: 3, nombre: 'Disco'}
];

// carrito.forEach( producto => console.log(producto.nombre));

carrito.forEach( producto =>  {
    console.log(`Agregaste ${producto.id} con el nombre ${producto.nombre}`);
});

// const nuevoArreglo = carrito.map( producto =>  (`Agregaste ${producto.nombre}`));
const nuevoArreglo = carrito.map( producto =>  producto.nombre);

console.log(nuevoArreglo);
// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...