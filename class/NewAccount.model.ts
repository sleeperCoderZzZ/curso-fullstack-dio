import {DioAccount} from "./AccountAbstract.model";

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number, balance: number) {
    super(name, accountNumber, balance);
  }

  deposit(amount: number): void {
    super.deposit(amount + 10);
  }
}
