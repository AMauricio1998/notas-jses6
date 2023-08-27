const producto = 'Monitor de 20 pulgadas';

//.repeat te permitira repetir una cadena de texto

const texto = ' en promocion'. repeat(3);

console.log(texto);
console.log(`${producto}${texto} !!!`);

//split dividir un string
const actividad = "Estoy aprendiendo java moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, musica, futbol';
console.log(hobbies.split(", "));

const tweet = 'Aprendiendo Javascript #JSmoderno';
console.log(tweet.split('#'));
