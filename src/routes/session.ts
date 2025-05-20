import { Router } from "express"
import { joinSession } from "../controllers/sessionController"
const router = Router()


router.get("/", joinSession)

export default router