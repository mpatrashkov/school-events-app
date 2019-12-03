import { Router } from "express"
import eventController from "./src/controllers/event"

const router = Router()

router.use(eventController)

export default router