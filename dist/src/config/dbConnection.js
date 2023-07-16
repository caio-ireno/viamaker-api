"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const Password = process.env.DB_PASSWORD;
mongoose_1.default.connect(`mongodb+srv://caioireno:${Password}@viamaker.aifojlv.mongodb.net/viamaker`);
const db = mongoose_1.default.connection;
exports.default = db;
