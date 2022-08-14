import { Collection } from "mongodb";
import { MongoConnection } from "./connection";

export class Database {
  public collectionName: string;
  private static database: string = "password-generator";

  // Constructor
  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  /**
   * Connect
   */
  public async connect(): Promise<any> {
    try {
      const connection = await MongoConnection.generateConnection();
      const db = connection.db(Database.database);
      const collection = db.collection(this.collectionName);

      return {
        db: db,
        collection: collection,
      };
    } catch (error) {
      throw new Error(`database connect ${error}`);
    }
  }

  /**
   * Get Collection
   */
  public async getCollection(): Promise<Collection> {
    try {
      const { collection } = await this.connect();

      return collection;
    } catch (error) {
      throw new Error(`database getcollection ${error}`);
    }
  }
}
