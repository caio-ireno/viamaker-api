import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const dbPassword = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://caioireno:${dbPassword}@viamaker.aifojlv.mongodb.net/`)

const db = mongoose.connection

export default db