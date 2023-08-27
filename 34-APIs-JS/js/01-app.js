const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('Elresultado es', resultado);
        } )
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la nitificacion', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo JS'
        });
        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com');
        }
    }
});