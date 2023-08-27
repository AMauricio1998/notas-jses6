let DB;

document.addEventListener('DOMContentLoaded', function() {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 3000);
}); 

function crmDB() {
    ///Crear base de datos 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error en la base de datos');
    }

    //Si se creo bien
    crmDB.onsuccess =  function() {
        console.log('Base de datoss creada');

        db = crmDB.result;
    }

    //Configuracion de la base de datos
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        //Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');
    }
}

function crearCliente() {
    let transaction = db.transaction(['crm'], 'readwrite');
    transaction.oncomplete = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror = function () { 
        console.log("Hubo un error");
     }

     const objectStore = transaction.objectStore('crm');

     const nuevoCliente = {
        nombre : "Juan",
        email: "correo@correo.com",
        telefono: 1020912
     }

    let peticion = objectStore.add(nuevoCliente);

    console.log(peticion);

}