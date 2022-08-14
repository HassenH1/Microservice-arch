import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

const { ROUTES } = require("../libs/routes");

const { setupLogging } = require("../libs/logging");
const { setupProxies } = require("../libs/proxy");

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 4000;

setupProxies(app, ROUTES);
setupLogging(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
