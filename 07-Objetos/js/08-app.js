"use strict";

// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//No te permite modificar las propiedades del objeto tampoco otra accion
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isFrozen(producto));


