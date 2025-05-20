import { Router } from "express"
import { getQuizzes } from "../controllers/loginController"
const router = Router()

router.get("/", getQuizzes)

export default router