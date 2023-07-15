"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductsRoutes_1 = __importDefault(require("./ProductsRoutes"));
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Api Viamaker" });
    });
    app.use(express_1.default.json(), ProductsRoutes_1.default);
};
exports.default = routes;
