"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const user = express_1.default.Router();
user
    .get("/usuario", userController_1.default.listarUsuario)
    .get("/usuario/:id", userController_1.default.listarUsuarioPorId)
    .post("/usuario", userController_1.default.cadastrarUsuario)
    .put("/usuario/:id", userController_1.default.atualizarUsuario)
    .delete("/usuario/:id", userController_1.default.excluirUsuario);
exports.default = user;
