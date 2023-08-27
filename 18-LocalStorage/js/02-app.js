const producto = localStorage.getItem('producto');
console.log( JSON.parse( producto ));//combierte a objeto o arreglo siempre y cuando tenga la fomra adecuada

const meses = localStorage.getItem('meses');
console.log( JSON.parse( meses )); 
