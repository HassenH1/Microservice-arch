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
const enum_1 = require("../../../../libs/enum");
class Login {
    constructor(db) {
        this.db = db;
    }
    logUserIn(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = {
                    username: params.username,
                    password: params.password,
                };
                const resp = yield this.db
                    .collection(enum_1.Collections.USERS)
                    .insertOne(payload);
                console.log(JSON.stringify(resp, null, 2), "<===waht is resp?");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.default = Login;
