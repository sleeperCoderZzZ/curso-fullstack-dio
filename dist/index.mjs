// class/AccountAbstract.model.ts
var DioAccount = class {
  name;
  accountNumber;
  balance;
  status;
  constructor(name, accountNumber, balance = 0) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = true;
  }
  getAccountNumber() {
    return this.accountNumber;
  }
  getName() {
    return this.name;
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(
      `Dep\xF3sito de ${amount} realizado com sucesso na conta ${this.accountNumber}.`
    );
  }
  withdraw(amount) {
    if (this.validateStatus() && this.validateBalance(amount)) {
      this.balance -= amount;
      console.log(
        `Saque de ${amount} realizado com sucesso na conta ${this.accountNumber}.`
      );
    } else {
      console.log(
        `N\xE3o \xE9 poss\xEDvel realizar o saque. A conta ${this.accountNumber} est\xE1 inativa ou saldo insuficiente.`
      );
    }
  }
  validateStatus() {
    if (this.status) {
      console.log(`Conta ${this.accountNumber} est\xE1 ativa.`);
      return true;
    } else {
      console.log(`Conta ${this.accountNumber} est\xE1 inativa.`);
      return false;
    }
  }
  validateBalance(amount) {
    if (this.balance >= amount) {
      console.log(
        `Saldo suficiente para realizar a opera\xE7\xE3o. Saldo atual: ${this.balance}`
      );
      return true;
    } else {
      console.log(
        `Saldo insuficiente para realizar a opera\xE7\xE3o. Saldo atual: ${this.balance}`
      );
      return false;
    }
  }
};

// class/PeopleAccount.model.ts
var PeopleAccount = class extends DioAccount {
  cpf;
  constructor(name, accountNumber, balance, cpf) {
    super(name, accountNumber, balance);
    this.cpf = cpf;
  }
  showDocument() {
    console.log(`CPF: ${this.cpf}`);
  }
};

// class/CompanyAccount.model.ts
var CompanyAccount = class extends DioAccount {
  cnpj;
  constructor(name, accountNumber, balance, cnpj) {
    super(name, accountNumber, balance = 0);
    this.cnpj = cnpj;
  }
  showDocument() {
    console.log(`CNPJ: ${this.cnpj}`);
  }
  getLoan(amount) {
    if (this.validateStatus()) {
      this.deposit(amount);
      console.log(
        `Empr\xE9stimo de ${amount} realizado com sucesso na conta ${this.getAccountNumber()}.`
      );
    } else {
      console.log(
        `N\xE3o \xE9 poss\xEDvel realizar o empr\xE9stimo. A conta ${this.getAccountNumber()} est\xE1 inativa.`
      );
    }
  }
};

// src/index.ts
var peopleAccount = new PeopleAccount(
  "Jo\xE3o",
  123456,
  0,
  "123.456.789-00"
);
peopleAccount.deposit(1e3);
peopleAccount.withdraw(500);
peopleAccount.getBalance();
peopleAccount.showDocument();
console.log(peopleAccount);
var companyAccount = new CompanyAccount(
  "Maria",
  654321,
  0,
  "12.345.678/0001-90"
);
companyAccount.deposit(1e3);
companyAccount.withdraw(500);
companyAccount.getBalance();
companyAccount.showDocument();
console.log(companyAccount);
console.log(companyAccount.getAccountNumber());
