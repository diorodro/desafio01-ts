import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      const bonus = 10;
      this.deposit(value + bonus);
      console.log(`Você depositou ${value}. Com o bônus de ${bonus}, o saldo atual é: ${this.getBalance()}`);
    } else {
      console.log('Operação de depósito não permitida. Conta inválida.');
    }
  }
}
