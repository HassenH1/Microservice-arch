"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const setupLogging = (app) => {
    app.use((0, morgan_1.default)("dev"));
    // app.use(morgan("combined"));
};
exports.setupLogging = setupLogging;
