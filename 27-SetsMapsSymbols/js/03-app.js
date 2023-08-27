//Maps agregar quitar o recorrer objeots

const cliente = new Map();

//Llave valor
cliente.set('nombre', 'karen');
cliente.set('tipo', 'Free');
cliente.set('saldo', 3000);


console.log(cliente.size);

console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre'));

cliente.delete('saldo');

console.log(cliente.has('saldo'));

console.log(cliente.get('saldo'));

cliente.clear();
console.log(cliente);

const paciente = new Map([ ['nombre', 'Mauricio'], ['cuarto', 'no definido'] ]);

paciente.set('cuarto', 'cama12');

console.log(paciente);

paciente.forEach( (datos, index) => {
    console.log(index , datos);
});