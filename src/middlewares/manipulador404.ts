import { NextFunction, Request, Response } from "express";
import erro404 from "../erros/erro404";

export default function manipulador404(req: Request, res: Response, next: NextFunction) {
  const Erro404 = new erro404().enviarResposta(res)
  next(Erro404)
}