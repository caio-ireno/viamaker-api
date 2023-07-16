import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DbConnection = process.env.DB_CONNECTION

mongoose.connect(`${DbConnection}`)

const db = mongoose.connection

export default db