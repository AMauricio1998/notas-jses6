// En este video veremos lo que son los métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`) ,
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),

    set newCancion(cancion){
        this.cancion = cancion;
    console.log(`Añadiendo cancion ${cancion}`); 
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.newCancion = 'Snuff';
reproductor.cancion;

reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {
    
// }
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');
