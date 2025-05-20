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

router.post('/login', passport.authenticate('local'), login);
router.post('/logout', logout);
router.post('/register', register);

export default router;