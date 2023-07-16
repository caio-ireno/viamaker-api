import ErroBase from "./errorBase";

class erro404 extends ErroBase {
  constructor(msg = "Pagína nao encontrada") {
    super(msg, 404)
  }
}
export default erro404