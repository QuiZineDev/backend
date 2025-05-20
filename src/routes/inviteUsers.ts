import { Router } from "express"
import { inviteUsers } from "../controllers/inviteUsersController"
const router = Router()

router.get("/", inviteUsers)

export default router