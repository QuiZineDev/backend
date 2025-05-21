import { Router } from "express"
import { getQuizzes } from "../controllers/libraryController"
const router = Router()

/**
 * @swagger
 * /library:
 *   get:
 *     summary: Liste tous les quiz publics de la bibliothèque
 *     tags: [Quiz]
 *     responses:
 *       200:
 *         description: Liste des quiz
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
/**
 * @swagger
 * tags:
 *   name: Library
 *   description: Accès à la bibliothèque de quiz de l'utilisateur
 */

/**
 * @swagger
 * /library:
 *   get:
 *     summary: Récupérer la bibliothèque de quiz de l'utilisateur
 *     tags: [Library]
 *     requestBody:
 *       required: false
 *     responses:
 *       200:
 *         description: Liste des quiz de la bibliothèque
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in as 1"
 */
router.get("/", getQuizzes)

export default router