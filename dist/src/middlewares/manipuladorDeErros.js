"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const errorBase_1 = __importDefault(require("../erros/errorBase"));
const reqError_1 = __importDefault(require("../erros/reqError"));
const validationError_1 = __importDefault(require("../erros/validationError"));
const erro404_1 = __importDefault(require("../erros/erro404"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function manipuladorDeErros(erro, req, res, next) {
    if (erro instanceof mongoose_1.default.Error.CastError) {
        new reqError_1.default().enviarResposta(res);
    }
    else if (erro instanceof erro404_1.default) {
        erro.enviarResposta(res);
    }
    else if (erro instanceof mongoose_1.default.Error.ValidationError) {
        new validationError_1.default(erro).enviarResposta(res);
    }
    else {
        new errorBase_1.default().enviarResposta(res);
    }
}
exports.default = manipuladorDeErros;
