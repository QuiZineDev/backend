import { Router } from "express"
import { getProfile} from "../controllers/profileController"
const router = Router()

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
 *         description: Profil utilisateur avec historique récent
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 User:
 *                   type: string
 *                   description: Nom d'utilisateur
 *                   example: "john_doe"
 *                 historique:
 *                   type: array
 *                   description: 4 dernières participations de l'utilisateur
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       id_user:
 *                         type: integer
 *                         example: 42
 *                       id_session:
 *                         type: integer
 *                         example: 101
 *                       datetime:
 *                         type: string
 *                         format: date-time
 *                         example: "2024-06-01T12:34:56Z"
 *                       score:
 *                         type: number
 *                         example: 85
 */
router.get("/", getProfile)

export default router