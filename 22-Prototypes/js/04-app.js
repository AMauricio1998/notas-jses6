function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Obtener Tipo de Cliente
Cliente.prototype.tipoCliente = function()  { // Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo  = 'Normal';
    }
    return tipo;
}

// Otro Prototipo para el nombre completo
Cliente.prototype.nombreClienteSaldo = function()  {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
}

Cliente.prototype.retiraSaldo = function(retiro)  {
    this.saldo -= retiro;
}

function Persona(nombre, saldo, telefono)
{
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//entrar al proto de persona y se le pasa todo el proto de cliente (Object.create copia el proto y lo asigna a otra funciion)
Persona.prototype = Object.create( Cliente.prototype );
Persona.prototype.constructor = Cliente;

// Instanciarlo
const mauricio = new Persona('mauricio', 6000, 7224338552);
console.log(mauricio);

console.log( mauricio.nombreClienteSaldo() );

Persona.prototype.mostrarTelefono = function()
{
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log( mauricio.mostrarTelefono() );