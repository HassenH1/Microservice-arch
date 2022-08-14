"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("../../../libs/database/connection");
const login_1 = __importDefault(require("./module/login"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Instantiate Database
if (!connection_1.MongoConnection.isSet()) {
    connection_1.MongoConnection.setCredentials();
}
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("testing here inside auth");
});
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield connection_1.MongoConnection.generateConnection();
    const login = new login_1.default(db);
    login.logUserIn(req.body);
    res.json(req.body);
}));
app.post("/signup", (req, res) => {
    res.send("testing this here from auth server");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Auth Server is running at https://localhost:${port}`);
});
