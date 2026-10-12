export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number;
  private status: boolean;

  constructor(name: string, accountNumber: number, balance: number = 0) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = true;
  }

  getAccountNumber(): number {
    return this.accountNumber;
  };

  getName(): string {
    return this.name;
  };

  getBalance(): number {
    return this.balance;
  };

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `Depósito de ${amount} realizado com sucesso na conta ${this.accountNumber}.`,
    );
  }

  withdraw(amount: number): void {
    if (this.validateStatus() && this.validateBalance(amount)) {
      this.balance -= amount;
      console.log(
        `Saque de ${amount} realizado com sucesso na conta ${this.accountNumber}.`,
      );
    } else {
      console.log(
        `Não é possível realizar o saque. A conta ${this.accountNumber} está inativa ou saldo insuficiente.`,
      );
    }
  }

  validateStatus(): boolean {
    if (this.status) {
      console.log(`Conta ${this.accountNumber} está ativa.`);
      return true;
    } else {
      console.log(`Conta ${this.accountNumber} está inativa.`);
      return false;
    }
  }

  private validateBalance(amount: number): boolean {
    if (this.balance > amount) {
      console.log(
        `Saldo suficiente para realizar a operação. Saldo atual: ${this.balance}`,
      );
      return true;
    } else {
      console.log(
        `Saldo insuficiente para realizar a operação. Saldo atual: ${this.balance}`,
      );
      return false;
    }
  }
}
