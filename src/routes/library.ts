import { Router } from "express"
import { getQuizzes } from "../controllers/libraryController"
const router = Router()

router.get("/", getQuizzes)

export default router