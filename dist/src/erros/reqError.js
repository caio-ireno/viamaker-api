"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorBase_1 = __importDefault(require("./errorBase"));
class reqError extends errorBase_1.default {
    constructor(msg = "um ou mais dados invalidos") {
        super(msg, 400);
    }
}
exports.default = reqError;
