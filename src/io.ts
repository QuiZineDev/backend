import { Server } from "socket.io"
import * as http from "http"

let io: Server

export function initIO(server: http.Server) {
  io = new Server(server, {
      path: "/api/ws", // ← c’est ça qui manque
      //transports: ['websocket'],
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
  })
  return io
}

export function getIO(): Server {
  if (!io) throw new Error("Socket.io not initialized!")
  return io
}
