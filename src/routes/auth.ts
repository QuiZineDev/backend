// import { Router } from "express"
// const router = Router()

// // Example route
// router.get("/", (_req, res) => {
//   res.send("Auth route works!")
// })

// export default router

import { Router } from 'express';
import passport from '../middleware/passport';
import { login, logout, register } from '../controllers/authController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Gestion de l'authentification
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion d'un utilisateur
 *     tags: [Auth]
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
 *                 example: quizine
 *               password:
 *                 type: string
 *                 example: azerty
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
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Identifiants invalides
 */
router.post('/login', passport.authenticate('local'), login);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Déconnexion de l'utilisateur
 *     tags: [Auth]
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
router.post('/logout', logout);

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     tags: [Auth]
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
 *                 example: quizine
 *               password:
 *                 type: string
 *                 example: azerty
 *     responses:
 *       201:
 *         description: Utilisateur inscrit avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       409:
 *         description: Nom d'utilisateur déjà pris
 *       400:
 *         description: Requête invalide
 */
router.post('/signup', register);

export default router;