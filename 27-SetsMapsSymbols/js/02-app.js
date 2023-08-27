// Solo almacena objetos y no se pueden iterar con foreach
const weakSet = new WeakSet();

const cliente = {
    nombre: 'Mau',
    saldo: 200
}

weakSet.add(cliente);

// console.log(weakSet.has('cliente2'));

weakSet.delete(cliente);

console.log(weakSet);