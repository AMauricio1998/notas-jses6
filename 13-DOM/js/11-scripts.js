const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', () => {
//     console.log('No me toques');
// });

btnFlotante.addEventListener('click', muestraFooter);

function muestraFooter() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo'); 
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'Xcerrar';
    }
}