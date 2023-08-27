class Cliente {

    #nombre;
    
    constructor(nombre, saldo){
        this.#nombre = nombre, 
        this.saldo = saldo 
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida(){
        return `Bienvenido all cajero`;
    }

    // setNombre(nombre) {
    //     this.#nombre = nombre;
    // }

    // getNombre() {
    //     return this.#nombre;
    // }

}

// const mau2 = new Cliente();
// mau2.setNombre('Mauricio2');
// console.log( mau2.getNombree() );

const mau = new Cliente('Mauricio', 500);
console.log(mau.mostrarInformacion());