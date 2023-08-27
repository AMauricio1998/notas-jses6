const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// Si quisieramos obtener todos los productos que tienen un precio mayor a 400 tendriamos que hacer lo siguiente..

// const resultado = carrito.filter( producto => {
//     return producto.precio > 400
// } )

// console.log(resultado);

// Este ejemplo es un HOF porque .filter esta tomando una función como argumento, ese producto es un Arrow Function, pero puedes dejarlo de la sig forma,..

const mayor400 = producto => {
    return producto.precio > 400
} 

const resultado = carrito.filter(mayor400);
console.log(resultado);