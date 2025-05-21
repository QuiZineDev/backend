import { Server } from "socket.io"

export function setupGameSocket(io: Server) {
  const gameNamespace = io.of("/game")

  gameNamespace.on("connection", (socket) => {
    console.log("[Socket] New client connected to /game", socket.id)

    socket.on("joinGame", (gameId) => {
      socket.join(`game_${gameId}`)
      socket.emit("joinedGame", { gameId })
      console.log(`[Socket] ${socket.id} joined game_${gameId}`)
    })

    socket.on("gameAction", (data) => {
      socket.to(`game_${data.gameId}`).emit("gameAction", data)
    })

    socket.on("leaveGame", (gameId) => {
      socket.leave(`game_${gameId}`)
      socket.emit("leftGame", { gameId })
      console.log(`[Socket] ${socket.id} left game_${gameId}`)
    })

    socket.on("disconnect", () => {
      console.log("[Socket] Client disconnected from /game", socket.id)
    })
  })
}
