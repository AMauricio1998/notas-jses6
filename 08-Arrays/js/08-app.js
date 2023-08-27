// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

const { nombre } = producto;

console.log(nombre);

//desestructuracion con arreglos
const numeros = [10, 20, 30, 40, 50];

const [ , segundo, , ...cuarto ] = numeros;

console.log(segundo);
console.log(cuarto);