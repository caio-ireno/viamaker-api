"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const livros = [
    { id: 1, "titulo": "Senhor dos Aneis" },
    { id: 2, "titulo": "O Hobbit" }
];
app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
});
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});
exports.default = app;
