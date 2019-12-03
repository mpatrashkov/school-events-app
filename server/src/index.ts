import express from "express"
import { serverPort } from "./config"
import * as db from "./database"
import router from "../routes"

const app = express()

app.use(router)

app.use("*", (req, res) => {
    res.status(200).send("Everything is alright")
})

async function main() {
    await db.connect()
    console.log("Connected to database")
    app.listen(serverPort, () => {
        console.log(`Server is listening on port ${serverPort}`)
    })
}

main()
