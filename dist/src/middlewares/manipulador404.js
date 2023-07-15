"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const erro404_1 = __importDefault(require("../erros/erro404"));
function manipulador404(req, res, next) {
    const Erro404 = new erro404_1.default().enviarResposta(res);
    next(Erro404);
}
exports.default = manipulador404;
