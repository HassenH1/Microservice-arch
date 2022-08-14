"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("../../../libs/database/connection");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// Instantiate Database
if (!connection_1.MongoConnection.isSet()) {
  connection_1.MongoConnection.setCredentials();
}
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// parse application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
  res.send("testing here inside auth");
});
app.post("/login", (req, res) => {
  res.status(200).json({ message: "success", username: "req.body.username" });
});
app.post("/signup", (req, res) => {
  console.log("Testing this here from auth server???????????!!!!!!");
  res.send("testing this here from auth server");
});
app.listen(port, () => {
  console.log(
    `⚡️[server]: Auth Server is running at https://localhost:${port}`
  );
});
