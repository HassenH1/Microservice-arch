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
exports.MongoConnection = void 0;
const mongodb_1 = require("mongodb");
class MongoConnection {
    /**
     * Set the credentials of mongo to static variables
     *
     * @returns {boolean}
     */
    static setCredentials() {
        const uri = "mongodb://localhost/password-generator";
        MongoConnection.connection = new mongodb_1.MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }
    /**
     * Check if the database is set previously by another call
     *
     * @returns {boolean}
     */
    static isSet() {
        return MongoConnection.connection ? true : false;
    }
    /**
     * Generate a connection to mongo
     *
     * @returns {Promise<Db>}
     */
    static generateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (MongoConnection.connection) {
                MongoConnection.connection = yield MongoConnection.connection.connect();
            }
            return MongoConnection.connection.db("password-generator");
        });
    }
}
exports.MongoConnection = MongoConnection;
