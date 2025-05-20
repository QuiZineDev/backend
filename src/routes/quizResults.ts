import { Router } from "express"
import { postQuizResults } from "../controllers/quizResultsController"
const router = Router()

router.post("/", postQuizResults)

export default router