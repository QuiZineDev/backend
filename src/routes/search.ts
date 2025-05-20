import { Router } from "express"
import { getQuizzes } from "../controllers/searchController"
const router = Router()

router.get("/", getQuizzes)

export default router