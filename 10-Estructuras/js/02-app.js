// Veamos otras comparaciones
const puntaje = 1001;
const puntaje2 = "1002";

//Operador estricto compara valor y tipo de dato
if(puntaje2 === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual estricto");
}

// No es igual !=defirente ==igual a
if(puntaje != 1000) { //
    console.log("Si! es diferente!");
}  else {
    console.log("No, no es diferente");
}

// comparador estricto de tipo y valor
if(puntaje === 1000) {
    console.log("Si es igual!");
} else {
    console.log("No no es igual");
}

// comparador estricto de tipo y valor !==direrente de(estricto)
if(puntaje !== 1000) {
    console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
    console.log("No no es igual");
}
