//Objeto literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Obtener las llaves del objeto. nombre, precio, disponible
console.log(Object.keys(producto));

// Retorna el valor de las llaves
console.log(Object.values(producto));

//Retorna todo en pares->cada uno en un array separado
console.log(Object.entries(producto));
