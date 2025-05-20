import { Router } from "express"
import { returnHistory } from "../controllers/historyController"
const router = Router()

router.get("/", returnHistory)

export default router