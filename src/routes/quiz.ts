import { Router } from "express"
import { getQuizzes } from "../controllers/quizController"
const router = Router()

router.get("/", getQuizzes)

export default router