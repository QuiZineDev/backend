import { Router } from "express"
import { signin } from "../controllers/signupController"
const router = Router()

router.get("/", signin)

export default router