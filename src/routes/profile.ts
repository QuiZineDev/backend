import { Router } from "express"
import { getProfile } from "../controllers/profileController"
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
router.get("/", getProfile)

export default router