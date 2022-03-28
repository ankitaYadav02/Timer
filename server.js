import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const __dirname = path.resolve();
const PORT = 8000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    console.log('a user connected');
  })

server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})
