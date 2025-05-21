import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
import { createNewGameSession, quitSessionPrematurely } from "../controllers/sessionController"
const router = Router()


router.post("/gamerequest", inviteUsers)
router.post("/create/session/:idQuiz", createNewGameSession)
router.post("/delete/participation/:idSession", quitSessionPrematurely)
export default router