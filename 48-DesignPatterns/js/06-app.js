// Mixins, es una forma de agregar funciones a una clase una vez que ha sido creada...

// Vamos a utilizar la clase que creamos previamente...
class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre Persona: ${this.nombre}, Email: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Mi nombre es: ${this.nombre}`);
    }
}

// Añadir funcionesPersona a la clase...

Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona('Mauricio', 'correo@correo.com');
console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Persona('Cliente', 'correo@correo.com');
console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();