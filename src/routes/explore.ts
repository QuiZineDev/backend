import { Router } from "express"
import { getThings } from "../controllers/exploreController"
const router = Router()

router.get("/", getThings)

export default router