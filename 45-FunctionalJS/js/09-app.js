const suma = (a,b,c) => a + b + c;
// const parcial = (a) => (b, c) => suma(a,b,c);

// const primerNumero = parcial(5);
// const resultado = primerNumero(4,6);
// console.log(resultado);

const parcial = a => b => c => suma(a,b,c);

const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);

const numeroParcial = parcial(5)(4)(1);

console.log(numeroParcial);
console.log(resultado);