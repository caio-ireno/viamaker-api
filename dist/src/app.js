"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const routes_1 = __importDefault(require("./routes"));
dbConnection_1.default.on("error", console.log.bind(console, 'Erro de conexão'));
dbConnection_1.default.once("open", () => {
    console.log('conexão com o banco feita com sucesso');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, routes_1.default)(app);
exports.default = app;
