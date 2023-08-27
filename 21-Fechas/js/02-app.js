const diaHoy = new Date();

moment.locale('es');

console.log( moment().format('MMMM Do YYYY h:mm:ss a') );

console.log(moment().format('LLLL', diaHoy)); // Tuesday, October 26, 2021 1:55 PM

console.log( moment().add(3, 'days').calendar());