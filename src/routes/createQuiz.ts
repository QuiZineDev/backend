import { Router } from "express"
import { CreateQuiz } from "../controllers/createQuizController"
const router = Router()

router.get("/", CreateQuiz)

export default router