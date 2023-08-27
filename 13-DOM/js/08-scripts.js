
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild.textContent);
console.log(navegacion.lastElementChild.textContent);
// Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... y podrás listarlos de la siguiente forma...
// console.log(navegacion.childNodes);
// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos...
// console.log(navegacion.children);

// Hay mucha información aqui...
//console.log(navegacion.children[1].nodeName) // Tipo de Node = 1 es un eleemnto
//console.log(navegacion.children[1].nodeType) // Que etiqueta es...

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

// console.log(card.children[1].children[1].textContent);

// const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom';

// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

// console.log(card.parentNode);
// console.log(card.parentElement);

// console.log(card);
// console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
