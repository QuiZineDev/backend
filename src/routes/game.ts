import { Router } from "express"
import { inviteUsers, getGameRequestAsValidator } from "../controllers/inviteUsersController"
import { createNewGameSession, findSessionByIdController, quitSessionPrematurely } from "../controllers/sessionController"
import { get } from "http"
const router = Router()

/**
 * @swagger
 * tags:
 *   name: Game
 *   description: Gestion des sessions de quiz
 */

/**
 * @swagger
 * /api/game/gamerequest:
 *   post:
 *     tags: [Game]
 *     summary: Invite users to a game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               session:
 *                 type: number
 *                 description: ID of the game session
 *               joueurs:
 *                 type: array
 *                 items:
 *                   type: number
 *                 description: Array of user IDs to invite
 *     responses:
 *       200:
 *         description: Users invited successfully, you received a game request
 *       400:
 *         description: No game requests created
 *       404:
 *         description: Error creating some game requests
 *       500:
 *         description: Error creating game request
 */
router.post("/gamerequest", inviteUsers)

/**
 * @swagger
 * /api/game/create/session/{idQuiz}:
 *   post:
 *     tags: [Game]
 *     summary: Create a new game session
 *     parameters:
 *       - in: path
 *         name: idQuiz
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the quiz
 *     responses:
 *       201:
 *         description: Game session created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sessionId:
 *                   type: number
 *                 quiz:
 *                   type: quiz object
 *       400:
 *         description: Invalid request Missing required fields
 *       500:
 *        description: Error creating game session
 *       501:
 *        description: Failed to create participation
 */
router.post("/create/session/:idQuiz", createNewGameSession)
router.post("/delete/participation/:idSession", quitSessionPrematurely)

/**
 * @swagger
 * /api/game/myGameRequest:
 *   get:
 *     tags: [Game]
 *     summary: Get game requests as a validator
 *     responses:
 *       200:
 *         description: Game requests retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Error fetching game requests
 */
router.get("/myGameRequest", getGameRequestAsValidator)


router.get("/session/:idSession", findSessionByIdController)
export default router