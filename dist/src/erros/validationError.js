"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reqError_1 = __importDefault(require("./reqError"));
class validatonError extends reqError_1.default {
    constructor(erro) {
        const mensagensErro = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");
        super(`${mensagensErro}`);
    }
}
exports.default = validatonError;
