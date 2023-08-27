"use strict";

// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//No puedes agregar ni eliminar una propiedad pero si puedes alterar su valor
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(producto);
console.log(Object.isSealed(producto));
