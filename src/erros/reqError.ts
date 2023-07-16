import ErroBase from "./errorBase";

class reqError extends ErroBase {
  constructor(msg = "um ou mais dados invalidos") {
    super(msg, 400)
  }
}

export default reqError