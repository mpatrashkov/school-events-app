import dotenv from "dotenv"
dotenv.config()

export const serverPort = process.env.SERVER_PORT
export const dbHost = process.env.DB_HOST
export const dbName = process.env.DB_NAME
export const dbUser = process.env.DB_USER
export const dbPass = process.env.DB_PASS
export const dbPort = process.env.DB_PORT