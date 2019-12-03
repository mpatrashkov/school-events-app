import { Router } from "express"
import eventController from "./controllers/event"

const router = Router()

router.use(eventController)

export default router