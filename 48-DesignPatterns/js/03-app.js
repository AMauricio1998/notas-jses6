// Singleton no te va a permitir crear múltiples instancias de una clase..., en cambio te va a retornar el objeto ya instanciado...

let instancia = null;

class Persona {
    constructor(nombre, email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}


const persona2 = new Persona('Karen', 'karen@karen.com');
console.log(persona2);

const persona = new Persona('Juan', 'correo@correo.com');
console.log(persona);


