"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const manipulador404_1 = __importDefault(require("./middlewares/manipulador404"));
const manipuladorDeErros_1 = __importDefault(require("./middlewares/manipuladorDeErros"));
dbConnection_1.default.on("error", console.log.bind(console, 'Erro de conexão'));
dbConnection_1.default.once("open", () => {
    console.log('conexão com o banco feita com sucesso');
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173'
}));
(0, routes_1.default)(app);
app.use(manipulador404_1.default);
app.use(manipuladorDeErros_1.default);
exports.default = app;
