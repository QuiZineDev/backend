import { Router } from "express"
import { createListOfGamesResquests } from "../models/GameRequest"
const router = Router()


router.post("/game_request", createListOfGamesResquests)
router.post("/")

export default router