"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErroBase extends Error {
    constructor(mensagem = "Erro interno do servidor", status = 500) {
        super();
        this.message = mensagem;
        this.status = status;
    }
    enviarResposta(res) {
        res.status(this.status).send({
            mensagem: this.message,
            status: this.status
        });
    }
}
exports.default = ErroBase;
