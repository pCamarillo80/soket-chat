var socket = io();

var params = new URLSearchParams(window.location.search);


if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y la sala son necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

//escucha
socket.on('connect', function() {

    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuarios conectados ', resp);
    });

});
//escucha
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});
//enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pilar',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

socket.on('crearMensaje', function(resp) {
    console.log('servidor', resp);
});


socket.on('listaPersonas', function(personas) {
    console.log('servidor-listaPersonas ', personas);
});

// mensaje privado

socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje Privado:', mensaje);
});