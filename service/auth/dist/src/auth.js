"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// const { ROUTES } = require("./routes");
// const { setupLogging } = require("./logging");
// const { setupProxies } = require("./proxy");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
// setupLogging(app);
// setupProxies(app, ROUTES);
app.get("/free", (req, res) => {
  console.log("Testing this here from auth server~!!!!!!");
  res.send("testing this here from auth server");
});
app.listen(port, () => {
  console.log(
    `⚡️[server]: Auth Server is running at https://localhost:${port}`
  );
});
