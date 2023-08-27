// Object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'china'
        }
    }
}

const { informacion } = producto;
console.log(informacion.fabricacion.pais);

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);


