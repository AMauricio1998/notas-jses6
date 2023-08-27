

function descargar() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargo correctamente');
            } else {
                reject('Error de conexion');
            }
        }, 3000);
    })
}

// Async await

async function ejecutar() {
    try {
        const respuesta = await descargar();

        console.log( 2 + 2 );
        console.log( respuesta );
    } catch (error) {
        console.log(error);
    }
}
ejecutar();