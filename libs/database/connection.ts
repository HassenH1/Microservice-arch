import { Db, MongoClient, MongoClientOptions } from "mongodb";

export class MongoConnection {
  static connection: MongoClient;

  /**
   * Set the credentials of mongo to static variables
   *
   * @returns {boolean}
   */
  static setCredentials() {
    const uri = "mongodb://localhost/password-generator";

    MongoConnection.connection = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongoClientOptions);
  }

  /**
   * Check if the database is set previously by another call
   *
   * @returns {boolean}
   */
  static isSet(): boolean {
    return MongoConnection.connection ? true : false;
  }

  /**
   * Generate a connection to mongo
   *
   * @returns {Promise<Db>}
   */
  static async generateConnection(): Promise<Db> {
    if (MongoConnection.connection) {
      MongoConnection.connection = await MongoConnection.connection.connect();
    }

    return MongoConnection.connection.db("password-generator");
  }
}
