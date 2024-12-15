export abstract class DioAccount {
  private readonly name: string; // Tornar imutável
  private readonly accountNumber: number; // Tornar imutável
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Você depositou ${value}. Saldo atual: ${this.balance}`);
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Você sacou ${value}. Saldo atual: ${this.balance}`);
    } else {
      console.log('Operação de saque não permitida. Verifique o saldo ou status da conta.');
    }
  }

  getBalance = (): void => {
    console.log(this.balance);
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
