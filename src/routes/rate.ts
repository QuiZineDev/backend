import { Router } from "express"
import { rate } from "../controllers/rateController"
const router = Router()

router.get("/", rate)

export default router