const { io } = require( "../index");

//Mensages Sockets
io.on('connection', client => {
    console.log('Cliente Conectado');
    client.on('disconnect', () => {
        console.log('Cliente Desconectado')
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload.nombre)
        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });
    
})
