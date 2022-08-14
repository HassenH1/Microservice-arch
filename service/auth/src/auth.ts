import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { MongoConnection } from "../../../libs/database/connection";
import Login from "./module/login";
import { Db } from "mongodb";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3001;

// Instantiate Database
if (!MongoConnection.isSet()) {
  MongoConnection.setCredentials();
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("testing here inside auth");
});

app.post("/login", async (req: Request, res: Response) => {
  const db: Db = await MongoConnection.generateConnection();
  const login = new Login(db);
  login.logUserIn(req.body);
  res.json(req.body);
});

app.post("/signup", (req: Request, res: Response) => {
  res.send("testing this here from auth server");
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: Auth Server is running at https://localhost:${port}`
  );
});
