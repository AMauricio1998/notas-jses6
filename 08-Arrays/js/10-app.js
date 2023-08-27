const carrito = [
    {nombre: "Pantalla grande", precio: 300},
    {nombre: "Tablet", precio: 400},
    {nombre: "Ipad", precio: 500},
    {nombre: "PC gamer", precio: 600},
    {nombre: "carro", precio: 700},
    {nombre: "telefono", precio: 800},
]

//.map crea un nuevo arreglo y el foreach no
const arreglo1 = carrito.forEach( function(producto){
    return `${producto.nombre} - precio: ${producto.precio }`;    
});

const newArray = carrito.map( function(producto){
    return `${producto.nombre} - precio: ${producto.precio }`;    
});

console.log(arreglo1);
console.log(newArray);
