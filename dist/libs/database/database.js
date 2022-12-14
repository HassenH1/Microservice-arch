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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const connection_1 = require("./connection");
class Database {
    // Constructor
    constructor(collectionName) {
        this.collectionName = collectionName;
    }
    /**
     * Connect
     */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield connection_1.MongoConnection.generateConnection();
                const db = connection.db(Database.database);
                const collection = db.collection(this.collectionName);
                return {
                    db: db,
                    collection: collection,
                };
            }
            catch (error) {
                throw new Error(`database connect ${error}`);
            }
        });
    }
    /**
     * Get Collection
     */
    getCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { collection } = yield this.connect();
                return collection;
            }
            catch (error) {
                throw new Error(`database getcollection ${error}`);
            }
        });
    }
}
exports.Database = Database;
Database.database = "password-generator";
