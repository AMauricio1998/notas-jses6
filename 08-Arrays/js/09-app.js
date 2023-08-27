const carrito = [
    {nombre: "Pantalla grande", precio: 300},
    {nombre: "Tablet", precio: 400},
    {nombre: "Ipad", precio: 500},
    {nombre: "PC gamer", precio: 600},
    {nombre: "carro", precio: 700},
    {nombre: "telefono", precio: 800},
]

for (let i = 0; i < carrito.length; i++) {
    console.log( `${carrito[i].nombre} - precio: ${carrito[i].precio }` );    
}

carrito.forEach( (producto) => {
    console.log( `${producto.nombre} - precio: ${producto.precio }` );    
});