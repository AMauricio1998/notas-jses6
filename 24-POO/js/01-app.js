class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre, 
        this.saldo = saldo 
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static Bienvenida(){
        return `Bienvenido all cajero`;
    }
}

const mauricio = new Cliente('Maurico', 400);
console.log(mauricio.mostrarInformacion());
console.log(mauricio);

console.log( Cliente.Bienvenida() );

//--------------------------------------------------------
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre, 
        this.saldo = saldo 
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
 }

const mauricio2 = new Cliente2('Maurico2', 400);
console.log(mauricio2.mostrarInformacion());
console.log(mauricio2);