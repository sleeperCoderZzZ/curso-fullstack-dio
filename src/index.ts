// Dio Banking

// name, accountNumber

// deposit, withdraw

import { PeopleAccount } from "../class/PeopleAccount.model";
import { CompanyAccount } from "../class/CompanyAccount.model";
import { NewAccount } from "../class/NewAccount.model";

const peopleAccount: PeopleAccount = new PeopleAccount(
  "João",
  123456,
  0,
  "123.456.789-00",
);
peopleAccount.deposit(1000);
peopleAccount.withdraw(500);
peopleAccount.getBalance();
peopleAccount.showDocument(); // CPF:
console.log(peopleAccount); // João

const companyAccount: CompanyAccount = new CompanyAccount(
  "Maria",
  654321,
  0,
  "12.345.678/0001-90",
);
companyAccount.deposit(1000);
companyAccount.withdraw(500);
companyAccount.getBalance();
companyAccount.showDocument(); // CNPJ:
console.log(companyAccount); // Maria
companyAccount.getLoan(5000);

const newAccount: NewAccount = new NewAccount("Pedro", 111111, 0);

newAccount.deposit(1000);
newAccount.withdraw(500);
newAccount.getBalance();
console.log(newAccount); // Pedro

console.log(companyAccount.getAccountNumber()); // Maria
