import { Db } from "mongodb";
import { Collections } from "../../../../libs/enum";

export default class Login {
  db: Db;
  constructor(db: Db) {
    this.db = db;
  }
  async logUserIn(params: { [key: string]: string }) {
    try {
      const payload = {
        username: params.username,
        password: params.password,
      };
      const resp = await this.db
        .collection(Collections.USERS)
        .insertOne(payload);
      console.log(JSON.stringify(resp, null, 2), "<===waht is resp?");
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
