import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
import { createNewGameSession } from "../controllers/sessionController"
const router = Router()


router.post("/gamerequest", inviteUsers)
router.post("/create/session/:idQuiz", createNewGameSession)

export default router