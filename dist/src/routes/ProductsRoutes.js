"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const produtoController_1 = __importDefault(require("../controllers/produtoController"));
const product = express_1.default.Router();
product
    .get("/produto", produtoController_1.default.listarProdutos)
    .get("/produto/:id", produtoController_1.default.listarProductPorId)
    .post("/produto", produtoController_1.default.cadastrarProduct)
    .put("/produto/:id", produtoController_1.default.atualizarProduct)
    .delete("/produto/:id", produtoController_1.default.excluirProduto);
exports.default = product;
