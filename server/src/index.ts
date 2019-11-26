import express from "express"
import { serverPort } from "./config"
import * as db from "./database"
import { IEventModel, EventModel } from "./models/event"

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        abc: 123
    })
})

app.post("/event", async (req, res) => {
    const { title, description, time, date } = req.body

    const event = new EventModel(<IEventModel>{
        title,
        description,
        time,
        date
    })

    await event.save()
})

app.use("*", (req, res) => {
    res.status(404).send("Ni moga ti namerq stranicata brat, sori...")
})

async function main() {
    await db.connect()
    console.log("Connected to database")
    app.listen(serverPort, () => {
        console.log(`Server is listening on port ${serverPort}`)
    })
}

main()
