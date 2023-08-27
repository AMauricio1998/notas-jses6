"use strict";

// Object literal
// this es una forma de referirse un objeto en si mismo, se mantiene en el objeto en el que fue declarado
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true, 
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();