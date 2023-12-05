import express from 'express';
import { Server, createServer } from 'http';
import { Server as Io } from 'socket.io';

class app {
    public app: express.Application;
    public server: Server;

    private socketIo: Io;

    constructor(){
        this.app = express();
        this.server = createServer(this.app);
        this.socketIo = new Io(this.server, {cors: {origin: '*'}} );    

        this.socketIo.on('connection', socket => {
            console.log('User connection')

            socket.on('disconnect', () => {
                console.log("usuario desconectado")
            })

            socket.on('message', (message) => {
                socket.broadcast.emit('message',message )
            })

            socket.on('Redes 1', (message) => {
                socket.broadcast.emit('Redes 1',message )
            })

            socket.on('Redes 2', (message) => {
                socket.broadcast.emit('Redes 2',message )
            })

            socket.on('AI', (message) => {
                socket.broadcast.emit('AI',message )
            })

            socket.on('Sistamas Multimidia', (message) => {
                socket.broadcast.emit('Sistamas Multimidia',message )
            })
        });
    }
}

export default app;