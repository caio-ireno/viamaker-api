"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    id: { type: String },
    nome: { type: String, required: [true, "nome obrigatorio"] },
    description: { type: String, required: [true, "Descrição obrigatoria"] },
});
const ProductModel = mongoose_1.default.model("typeproduct", ProductSchema);
exports.default = ProductModel;
