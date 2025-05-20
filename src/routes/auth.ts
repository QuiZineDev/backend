import { Router } from "express"
const router = Router()

// Example route
router.get("/", (_req, res) => {
  res.send("Auth route works!")
})

export default router