const paises = [];

function nuevoPais(pais, callback) {
    paises.push(paises);
    console.log(`Agregado: ${pais}`); //Resultado del resolve
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallBackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Inglaterra', mostrarPaises)
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallBackHell();