"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbPassword = process.env.DB_PASSWORD;
mongoose_1.default.connect(`mongodb+srv://caioireno:${dbPassword}@viamaker.aifojlv.mongodb.net/`);
const db = mongoose_1.default.connection;
exports.default = db;
