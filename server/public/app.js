"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
class app {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = (0, http_1.createServer)(this.app);
        this.socketIo = new socket_io_1.Server(this.server, { cors: { origin: '*' } });
        this.socketIo.on('connection', socket => {
            console.log('User connection');
            socket.on('disconnect', () => {
                console.log("usuario desconectado");
            });
            socket.on('message', (message) => {
                socket.broadcast.emit('message', message);
            });
            socket.on('Redes 1', (message) => {
                socket.broadcast.emit('Redes 1', message);
            });
            socket.on('Redes 2', (message) => {
                socket.broadcast.emit('Redes 2', message);
            });
            socket.on('AI', (message) => {
                socket.broadcast.emit('AI', message);
            });
            socket.on('Sistamas Multimidia', (message) => {
                socket.broadcast.emit('Sistamas Multimidia', message);
            });
        });
    }
}
exports.default = app;
