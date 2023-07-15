import { NextFunction, Request, Response } from "express"
import mongoose from "mongoose"
import ErroBase from "../erros/errorBase";
import reqError from "../erros/reqError";
import validatonError from "../erros/validationError";
import erro404 from "../erros/erro404";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function manipuladorDeErros(erro: Error, req: Request, res: Response, next: NextFunction): void {
  if (erro instanceof mongoose.Error.CastError) {
    new reqError().enviarResposta(res)
  } else if (erro instanceof erro404) {
    erro.enviarResposta(res)
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new validatonError(erro).enviarResposta(res)

  } else {
    new ErroBase().enviarResposta(res)
  }
}