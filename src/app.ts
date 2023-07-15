import express from "express";
import db from "./config/dbConnection";
import routes from "./routes";
import cors from 'cors';


db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}));
routes(app);

export default app