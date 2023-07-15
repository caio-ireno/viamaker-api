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
const usuario_1 = __importDefault(require("../models/usuario"));
class UserController {
}
_a = UserController;
UserController.listarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Products = yield usuario_1.default.find();
        res.status(200).json(Products);
    }
    catch (err) {
        console.log(err);
    }
});
UserController.listarUsuarioPorId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield usuario_1.default.findById(id).exec();
        if (!product) {
            console.log("usuário não encontrado");
        }
        else {
            res.status(200).send(product);
        }
    }
    catch (err) {
        console.log(err);
    }
});
UserController.cadastrarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new usuario_1.default(req.body);
        const productResultado = yield product.save();
        res.status(201).send(productResultado.toJSON());
    }
    catch (err) {
        console.log(err);
    }
});
UserController.atualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield usuario_1.default.findByIdAndUpdate(id, { $set: req.body });
        if (!id) {
            console.log("usuário não encontrado");
        }
        else {
            res.status(200).send({ message: 'usuário atualizado com sucesso' });
        }
    }
    catch (err) {
        console.log(err);
    }
});
UserController.excluirUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = yield usuario_1.default.findByIdAndDelete(id).exec();
        if (!product) {
            console.log("usuário não encontrado");
        }
        else {
            res.status(200).send({ message: 'usuário removido com sucesso' });
        }
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = UserController;
