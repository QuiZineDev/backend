import { Router } from "express"
import { getRecentlyAccssedQuizzes } from "../controllers/recentController"

const router = Router()

router.get("/", getRecentlyAccssedQuizzes)

export default router