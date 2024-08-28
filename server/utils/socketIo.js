import { Server } from "socket.io";
import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);

  socket.on("sendMessage", (data) => {
    console.log("data", data);
    socket.broadcast.emit("messageReceived", data);
  });
  socket.on("addMembers", (projectId) => {
    io.emit("memberAdded", projectId);
  });
});

export { io, server, app };
