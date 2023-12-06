import {io} from 'socket.io-client';

export const socket = () => io('https://socket-app-eight.vercel.app');