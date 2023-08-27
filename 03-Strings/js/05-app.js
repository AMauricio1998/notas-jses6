
const producto = 'Monitor de 20 pulgadas';

//.replace para remplazar
console.log(producto);
console.log(producto.replace('pulgadas','"'));

console.log(producto.replace('Monitor','Monitor curvo'));

//.slice para recortar
console.log(producto.slice(0, 10));
// console.log(producto.slice(8));
// console.log(producto.slice(2 , 1));

//Alternativa a slice .substring
console.log(producto.substring(0, 10));
console.log(producto.substring(4,1));

const usuario = "Mauriciio";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));
