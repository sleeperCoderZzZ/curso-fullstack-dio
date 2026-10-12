import { DioAccount } from "./AccountAbstract.model";

export class CompanyAccount extends DioAccount {
  private readonly cnpj: string;

  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    cnpj: string,
  ) {
    super(name, accountNumber, balance);
    this.cnpj = cnpj;
  }

  showDocument(): void {
    console.log(`CNPJ: ${this.cnpj}`);
  }

  getLoan(amount: number): void {
    if (this.validateStatus()) {
      this.deposit(amount);
      console.log(
        `Empréstimo de ${amount} realizado com sucesso na conta ${this.getAccountNumber()}.`,
      );
    } else {
      console.log(
        `Não é possível realizar o empréstimo. A conta ${this.getAccountNumber()} está inativa.`,
      );
    }
  }
}
