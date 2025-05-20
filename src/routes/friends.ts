import { Router } from "express"
import { getFriends,askFriend,acceptFriend,refuseFriend } from "../controllers/friendsController"
const router = Router()

router.post("/ask/:idValidator", askFriend)
router.post("/accept/:idRequestor", acceptFriend)
router.post("/refuse/:idRequestor", refuseFriend)
router.get("/", getFriends)

export default router