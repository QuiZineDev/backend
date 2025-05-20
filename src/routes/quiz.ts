import { Router } from "express"
import { getQuizes } from "../controllers/quizController"
const router = Router()

router.get("/:idQuiz", getQuizes)

export default router