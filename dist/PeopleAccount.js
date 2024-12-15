"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class PeopleAccount extends DioAccount_1.DioAccount {
    constructor(doc_id, name, accountNumber) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}
exports.PeopleAccount = PeopleAccount;
