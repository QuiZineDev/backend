import { Router } from "express"
import libraryRouter from "./library"
import quizRouter from "./quiz"
import exploreRouter from "./explore"
import recentRouter from "./recent"
import searchRouter from "./search"
import historyRouter from "./history"
import authRouter from "./auth"
import profileRouter from "./profile"
import quizResultsRouter from "./quizResults"
import creatQuizRouter from "./createQuiz"
import rateRouter from "./rate"
import friendsRouter from "./friends"
import inviteUsersRouter from "./inviteUsers"
import sessionRouter from "./session"
import { User } from "../models/User"

const router = Router()

/**
 * @swagger
 * /:
 *   get:
 *     summary: Accueil de l'API
 *     description: Endpoint d'accueil, liste les routes principales de l'API.
 *     tags: [Root]
 *     responses:
 *       200:
 *         description: Liste des routes principales
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 routes: [
 *                   "/auth", "/quiz", "/library", "/explore", "/recent", "/search", "/history", "/profile", "/friends", "/inviteUsers", "/quizResults", "/createQuiz", "/rate", "/session"
 *                 ]
 */
router.get("/", (req, res) => {
  res.json({
    routes: [
      "/quiz", "/library", "/explore", "/recent", "/search", "/history", "/profile", "/friends", "/inviteUsers", "/quizResults", "/createQuiz", "/rate", "/session"
    ]
  })
})

router.use((req, res, next) => {
    const publicPaths = [
      "/login",
      "/signup"
    ];
  
    if (
      publicPaths.some(path => req.path.startsWith(path)) ||
      req.method === "OPTIONS" // pour CORS preflight
    ) {
        console.log("publicpath")
      return next();
    }
  
    if (req.isAuthenticated && req.isAuthenticated()) {
        console.log((req.user as User).username," is authed ✅ \n",)
      return next();
    }
    console.log("❌ not authed\n")
    return res.status(401).json({ error: "Unauthorized\n" });
  });

router.use("/library", libraryRouter)
router.use("/quiz", quizRouter)
router.use("/explore", exploreRouter)
router.use("/recent", recentRouter)
router.use("/search", searchRouter)
router.use("/history", historyRouter)
router.use("/profile", profileRouter)
router.use("/friends", friendsRouter)
router.use("/inviteUsers", inviteUsersRouter)
router.use("/quizResults", quizResultsRouter)
router.use("/createQuiz", creatQuizRouter)
router.use("/rate", rateRouter)
router.use("/session", sessionRouter)
router.use("/", authRouter)

export default router