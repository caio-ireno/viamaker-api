import mongoose from "mongoose"
import reqError from "./reqError"

class validatonError extends reqError {
  constructor(erro: mongoose.Error.ValidationError) {
    const mensagensErro = Object.values(erro.errors)
      .map(erro => erro.message)
      .join("; ")
    super(`${mensagensErro}`)
  }
}

export default validatonError