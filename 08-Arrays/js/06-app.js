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

const producto3 = {
    nombre: "Ropa",
    precio: 800
}

let resultado;

resultado = [...carrito, producto];
resultado = [producto2, ...resultado];
resultado = [...resultado, producto3];

console.table(resultado);


