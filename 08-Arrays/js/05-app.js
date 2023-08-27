const meses = ['enero', 'febrero', 'marzo'];


//Agregar al final del arreglo
meses.push('Abril');

// console.table(meses);


const carrito = [];

//Definir un rpoducto

const producto = {
    nombre: "Pantalla 30 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 5500
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Ropa",
    precio: 800
}

carrito.unshift(producto3);

console.table(carrito)


