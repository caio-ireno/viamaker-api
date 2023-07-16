import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const Password = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://caioireno:${Password}@viamaker.aifojlv.mongodb.net/viamaker`)

const db = mongoose.connection

export default db