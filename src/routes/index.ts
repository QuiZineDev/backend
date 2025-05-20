import { Router } from "express"
import libraryRouter from "./library"
import quizRouter from "./quiz"
import exploreRouter from "./explore"
import recentRouter from "./recent"
import searchRouter from "./search"
import historyRouter from "./history"
import loginRouter from "./login"
import profileRouter from "./profile"


const router = Router()

router.use("/library", libraryRouter)
router.use("/quiz", quizRouter)
router.use("/explore", exploreRouter)
router.use("/recent", recentRouter)
router.use("/search", searchRouter)
router.use("/history", historyRouter)
router.use("/login", loginRouter)
router.use("/profile", profileRouter)

export default router