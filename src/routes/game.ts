import { Router } from "express"
import { createListOfGamesResquests } from "../models/GameRequest"
const router = Router()


router.post("/game/game_request", createListOfGamesResquests)
