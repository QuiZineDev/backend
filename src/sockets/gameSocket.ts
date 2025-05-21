import { Server } from "socket.io"
import { createParticipation, deleteNullParticipationsOfSession, setScore, setScoreBis } from "../models/Participation"
import { deleteGameRequestBis, findGameRequestAsSession } from "../models/GameRequest"
import { findSessionById } from "../models/Session"
import { findQuizById } from "../models/Quiz"
import { findUserById } from "../models/User"
import { getIO } from "../io"


const scoreboards = new Map<
  string,
  { scores: { userId: number; score: number }[]; timeout?: NodeJS.Timeout }
>();

export function setupGameSocket(io: Server) {
  console.log("g fait websocket")
  const gameNamespace = io.of("/api/ws")
  gameNamespace.on("connection", (socket) => {
    console.log("[Socket] New client connected to /ws", socket.id)

    //accepte une notif
    socket.on("eventJoin", ({sessionId, userId}:{sessionId:number, userId:number}) => {
      socket.join("session_" + sessionId.toString())
      
      deleteGameRequestBis(sessionId, userId).then((gr)=>{ //1, suprime
        Promise.all(
          [createParticipation(sessionId, userId), 
          findGameRequestAsSession(sessionId), //2 check restant
          findSessionById(sessionId),
          findUserById(userId)]
        ).then(([p, grs, s, u])=>{
            findQuizById(s.id_quiz, u).then((q)=>{
              if(grs.length === 0){// plus de demandeurs
                io.of("/api/ws").to("session_" + sessionId.toString()).emit("gamestart", { session: sessionId, quiz: q }) 
              }
            })
        })
      })
    })

    socket.on("eventRefuse", ({sessionId, userId}:{sessionId:number, userId:number}) => {
      deleteGameRequestBis(sessionId, userId).then((gr)=>{ //delete
        Promise.all([
        findGameRequestAsSession(sessionId), //check restant
        findSessionById(sessionId),
        findUserById(userId)
        ]).then(([grs, s, u]) => {
          findQuizById(s.id_quiz, u).then((q)=>{
            if(grs.length === 0){// la dernière personne vient de refuser
              //le jeu démarre pour les autres
              io.of("/api/ws").to("session_" + sessionId.toString()).emit("gamestart", { session: sessionId, quiz: q }) 
            }
          })
        }).catch((err) => {
        console.error("Erreur dans eventRefuse :", err)
        socket.emit("error", "Erreur lors du refus de la demande.")
        })
      })
    })

    socket.on(
      "sendScore",
      ({ score, userId, sessionId }: { score: number; userId: number, sessionId:number }) => {
        const room = "session_" + socket.data.sessionId; // récupéré à l’auth ou eventJoin
        socket.join(room);
  
        // init si première fois
        if (!scoreboards.has(room)) {
          scoreboards.set(room, { scores: [], timeout: undefined });
        }
        const board = scoreboards.get(room)!;
        board.scores.push({ userId, score });
        setScoreBis(userId, sessionId, score)

        // si c’est le premier score, lancer le timer 5 s
        if (!board.timeout) {
          board.timeout = setTimeout(() => {
            emitLeaderboard(room, sessionId);
          }, 5000);
        }
      }
    );
  })
}


function emitLeaderboard(room: string, session_id:number) {
  const board = scoreboards.get(room);
  if (!board) return;

  // tri décroissant
  const sorted = board.scores.sort((a, b) => b.score - a.score);
  const io = getIO();

  // broadcast à la room
  io.of("/api/ws").to(room).emit("leaderboard", sorted);
  deleteNullParticipationsOfSession(session_id)
  // cleanup
  clearTimeout(board.timeout!);
  scoreboards.delete(room);
}