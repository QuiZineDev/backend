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
 * /login:
 *   post:
 *     summary: Connexion d’un utilisateur
 *     tags: [Auth]
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
 *     tags: [Auth]
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
 *       201:
 *         description: Utilisateur inscrit
 *       409:
 *         description: Nom d’utilisateur déjà pris
 */

router.post('/login', passport.authenticate('local'), login);
router.post('/logout', logout);
router.post('/signup', register);

export default router;