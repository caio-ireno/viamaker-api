import express, { Request, Response } from "express";
import db from "./config/dbConnection";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();

const livros = [
  { id: 1, "titulo": "Produto 1" },
  { id: 2, "titulo": "Produto 2" }
]

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Teste API');
})

app.get('/produtos', (req: Request, res: Response) => {
  res.status(200).json(livros)
})

export default app