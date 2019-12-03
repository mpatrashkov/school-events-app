import { Router } from "express"
import { EventModel } from "../models/event"

const router = Router()

router.get("/", async (req, res) => {
	const events = await EventModel.find({})
	res.json(events)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params
	const event = await EventModel.findOne({
		_id: id
	})

	res.json(event)
})

router.post("/", async (req, res) => {
	const { title, description, time, date, thumbnail, images, attachedDocuments, 
		eventType, eventRepetitions, repeatPeriod, peopleLimit, location, lector, owner } = req.body

	const event = new EventModel({
		title,
		description,
		time,
		date,
		thumbnail,
		images,
		attachedDocuments,
		eventType,
		eventRepetitions,
		repeatPeriod,
		peopleLimit,
		location,
		lector,
		owner
	})

	await event.save()
	res.sendStatus(200)
})

router.put("/", (req, res) => {

})

router.delete("/:id", (req, res) => {

})

export default router