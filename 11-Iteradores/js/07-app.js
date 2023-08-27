// En este video veremos for of...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

const carrito = [
    {id: 1, nombre: 'Libro' },
    {id: 2, nombre: 'Camisa'},
    {id: 3, nombre: 'Disco'}
];

for(let elementos of carrito) {
    console.log(elementos.nombre);
}

for (let pendiente of pendientes) {
    console.log(pendiente);
}

// Sin duda una forma más sencilla que un foreach y un for no?

