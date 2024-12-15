"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DioAccount = void 0;
class DioAccount {
    constructor(name, accountNumber) {
        this.balance = 0; // Tornar protected para acesso nas classes derivadas
        this.status = true; // Tornar protected para acesso nas classes derivadas
        this.setName = (name) => {
            this.name = name;
            console.log('Nome alterado com sucesso!');
        };
        this.getName = () => {
            return this.name;
        };
        this.deposit = (value) => {
            if (this.validateStatus()) {
                this.balance += value;
                console.log(`Você depositou ${value}. Saldo atual: ${this.balance}`);
            }
        };
        this.withdraw = (value) => {
            if (this.validateStatus() && this.balance >= value) {
                this.balance -= value;
                console.log(`Você sacou ${value}. Saldo atual: ${this.balance}`);
            }
            else {
                console.log('Operação de saque não permitida. Verifique o saldo ou status da conta.');
            }
        };
        this.getBalance = () => {
            console.log(this.balance);
        };
        this.validateStatus = () => {
            if (this.status) {
                return this.status;
            }
            throw new Error('Conta inválida');
        };
        this.name = name;
        this.accountNumber = accountNumber;
    }
}
exports.DioAccount = DioAccount;
