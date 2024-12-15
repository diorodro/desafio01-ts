import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      this.deposit(value);
      console.log(`Você pegou um empréstimo de ${value}. Saldo atual: ${this.getBalance()}`);
    } else {
      console.log('Operação de empréstimo não permitida. Conta inválida.');
    }
  }
}
