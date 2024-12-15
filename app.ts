import { SpecialAccount } from "./class/SpecialAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount } from "./class/DioAccount";

const specialAccount = new SpecialAccount('Cliente Especial', 54321);
specialAccount.deposit(100);
specialAccount.getBalance();

const companyAccount = new CompanyAccount('Empresa XYZ', 12345);
companyAccount.getLoan(5000);
companyAccount.getBalance();

class PersonalAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }
}

const personalAccount = new PersonalAccount('Cliente Pessoal', 67890);
personalAccount.deposit(200); // Depósito
personalAccount.withdraw(50);  // Saque
personalAccount.getBalance();  // Ver saldo
