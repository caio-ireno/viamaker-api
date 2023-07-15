"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("../models/produto"));
class ProductController {
}
_a = ProductController;
ProductController.listarProdutos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Products = yield produto_1.default.find();
        res.status(200).json(Products);
    }
    catch (err) {
        console.log(err);
    }
});
ProductController.listarProductPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield produto_1.default.findById(id).exec();
        if (!product) {
            console.log("produto nao encontrado");
        }
        else {
            res.status(200).send(product);
        }
    }
    catch (err) {
        console.log(err);
    }
});
ProductController.cadastrarProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new produto_1.default(req.body);
        const productResultado = yield product.save();
        res.status(201).send(productResultado.toJSON());
    }
    catch (err) {
        console.log(err);
    }
});
ProductController.atualizarProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield produto_1.default.findByIdAndUpdate(id, { $set: req.body });
        if (!id) {
            console.log("produto nao encontrado");
        }
        else {
            res.status(200).send({ message: 'Produto atualizado com sucesso' });
        }
    }
    catch (err) {
        console.log(err);
    }
});
ProductController.excluirProduto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield produto_1.default.findByIdAndDelete(id).exec();
        if (!product) {
            console.log("produto nao encontrado");
        }
        else {
            res.status(200).send({ message: 'Produto removido com sucesso' });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = ProductController;
