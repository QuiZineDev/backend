import { Router } from "express"
import { getFriends } from "../controllers/friendsController"
const router = Router()

router.get("/", getFriends)

export default router