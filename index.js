const express = require('express');
const path = require('path');
require('dotenv').config();


const app = express();

// Node Server

const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

require('./sockets/socket');

//Path Publico
const publicPath = path.resolve(__dirname, 'public')

server.listen(process.env.PORT, (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log(`Servidor corriendo en puerto`, 3000)
})
app.use(express.static(publicPath));
