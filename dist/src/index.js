"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const { ROUTES } = require("../libs/routes");
const { setupLogging } = require("../libs/logging");
const { setupProxies } = require("../libs/proxy");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
setupProxies(app, ROUTES);
setupLogging(app);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
