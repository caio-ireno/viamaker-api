"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorBase_1 = __importDefault(require("./errorBase"));
class erro404 extends errorBase_1.default {
    constructor(msg = "Pagína nao encontrada") {
        super(msg, 404);
    }
}
exports.default = erro404;
