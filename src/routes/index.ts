import { Router } from "express"
import libraryRouter from "./library"
import quizRouter from "./quiz"
import exploreRouter from "./explore"

const router = Router()

router.use("/library", libraryRouter)
router.use("/quiz", quizRouter)
router.use("/explore", exploreRouter)

export default router