import { Router } from "express"
import { getProfile} from "../controllers/profileController"
const router = Router()

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Récupérer le profil utilisateur
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Profil utilisateur
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
 *   name: Profile
 *   description: Gestion du profil utilisateur
 */

/**
 * @swagger
 * /profile:
 *   get:
 *     summary: Récupérer le profil de l'utilisateur courant
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: Profil utilisateur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Logged in as 1"
 */
router.get("/", getProfile)

export default router