class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre, 
        this.saldo = saldo 
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida(){
        return `Bienvenido all cajero`;
    }
}

//Herencia 
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono
        this.categoria = categoria
    }

    static bienvenida() { //reescribir un metodo
        return `Bienvenido al cajero de empresa`;
    }
}

const mauricio = new Cliente('Maurico', 400);
const empresa = new Empresa('Codigo con mau', 800, 5562140174, 'Java');
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());