const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado ${pais}`);
    }, 3000);
});

nuevoPais('Alemania').then( resultado => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Francia');
}).then( resultado => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais('Inglaterra');
} ).then( resultado => {
    console.log(resultado);
    console.log(paises);    
});

// En los Promises hay 3 valores posibles, pendiente, no se ha cumplido o rechazado...
// Fullfilled - se ha cumplido
// Rejected - se ha recahzado o no se pudo cumplir


// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...
