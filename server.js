import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const mongoClient = process.env.mongoclient;

mongoose
  .connect(mongoClient, {})
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(`${err} error while connecting to mongodb`);
  });

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);

    socket.on('disconnect', () => {
        console.log('user disconnected');
      });
})

io.of("/").adapter.on("create-room", (room) => {
    console.log(`room ${room} was created`);
  });
  
  io.of("/").adapter.on("join-room", (room, id) => {
    console.log(`socket ${id} has joined room ${room}`);
  });

server.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`);
})
