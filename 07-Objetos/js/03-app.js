// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//Agregar propiedades a un objeto
producto.imagen = "imagen.jpg";

//Eliminar propiedades de un objeto
delete producto.disponible;

console.log(producto);