"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialAccount = void 0;
const DioAccount_1 = require("./DioAccount");
class SpecialAccount extends DioAccount_1.DioAccount {
    constructor(name, accountNumber) {
        super(name, accountNumber);
        this.deposit = (value) => {
            if (this.validateStatus()) {
                const bonus = 10;
                this.balance += value + bonus;
                console.log(`Você depositou ${value}. Com o bônus de ${bonus}, o saldo atual é: ${this.balance}`);
            }
            else {
                console.log('Operação de depósito não permitida. Conta inválida.');
            }
        };
    }
}
exports.SpecialAccount = SpecialAccount;
