import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
const router = Router()


router.post("/game_request", inviteUsers)
router.post("/")

export default router