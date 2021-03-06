import mongoose from "mongoose"
import { dbHost, dbName, dbPass, dbUser } from "./config"

export const connect = async (): Promise<undefined> => {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}`, {
        useNewUrlParser: true
    })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'connection error:'));

    return new Promise((resolve, reject) => {
        db.once("open", () => {
            resolve()
        })
    })
}
