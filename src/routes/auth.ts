import { Router } from 'express';
import passport from '../middleware/passport';
import { login, logout, register } from '../controllers/authController';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Register
 *     description: Gestion des sessions de quiz
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Connexion d’un utilisateur
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Utilisateur connecté
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       401:
 *         description: Identifiants invalides
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Inscription d’un nouvel utilisateur
 *     tags: [Register]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur inscrit
 *       400:
 *         description: Missing username or password
 *       409:
 *         description: Nom d’utilisateur déjà pris
 *       500:
 *         description: Fail to create user
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     summary: Déconnexion de l'utilisateur
 *     tags: [Register]
 *     responses:
 *       200:
 *         description: Utilisateur déconnecté
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post('/login', passport.authenticate('local'), login);
router.post('/logout', logout);
router.post('/signup', register);

export default router;
