
const producto = '               Monitor de 20 pulgas¿das               ';

console.log(producto);
console.log(producto.length);

//Eliminar espacion del inicio
console.log( producto.trimStart() );
console.log( producto.trimEnd() );

console.log( producto.trimStart().trimEnd() );
console.log( producto.trim() );