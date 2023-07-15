"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
dbConnection_1.default.on("error", console.log.bind(console, 'Erro de conexão'));
dbConnection_1.default.once("open", () => {
    console.log('conexão com o banco feita com sucesso');
});
const app = (0, express_1.default)();
const livros = [
    { id: 1, "titulo": "Produto 1" },
    { id: 2, "titulo": "Produto 2" }
];
app.get('/', (req, res) => {
    res.status(200).send('Teste API');
});
app.get('/produtos', (req, res) => {
    res.status(200).json(livros);
});
exports.default = app;
