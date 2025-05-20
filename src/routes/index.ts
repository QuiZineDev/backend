import { Router } from "express"
import libraryRouter from "./library"
import quizRouter from "./quiz"
import exploreRouter from "./explore"
import recentRouter from "./recent"
import searchRouter from "./search"
import historyRouter from "./history"
import loginRouter from "./login"
import profileRouter from "./profile"
import quizResultsRouter from "./quizResults"
import creatQuizRouter from "./createQuiz"
import rateRouter from "./rate"

import friendsRouter from "./friends"

const router = Router()

router.use("/library", libraryRouter)
router.use("/quiz", quizRouter)
router.use("/explore", exploreRouter)
router.use("/recent", recentRouter)
router.use("/search", searchRouter)
router.use("/history", historyRouter)
router.use("/login", loginRouter)
router.use("/profile", profileRouter)
router.use("/friends", friendsRouter)
router.use("/quizResults", quizResultsRouter)
router.use("/createQuiz", creatQuizRouter)
router.use("/rate", rateRouter)

export default router