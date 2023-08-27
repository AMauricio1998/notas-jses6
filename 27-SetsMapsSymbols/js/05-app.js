const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log("Son iguales");
} else {
    console.log("Son diferentes");
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agregar nombre y apellido

persona[nombre] = 'Juan';
persona[apellido] = 'Reyes';
persona.tipoCliente = 'Free';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

//Las propiedades de un Symbol no son iterables
for(let i in persona) {
    console.log(i);
}

//Definir una descripcion del simbol
const nombreCliente = Symbol('Nombre cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);