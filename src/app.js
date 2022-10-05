import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, 'src')));

const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  socket.on('chatting', (data) => {
    io.emit('chatting', data);
  });
});

server.listen(PORT, () => {
  console.log(`시작합니다 소켓 연습용 ${PORT}`);
});
