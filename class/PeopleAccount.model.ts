import { DioAccount } from "./AccountAbstract.model";

export class PeopleAccount extends DioAccount {
    private readonly cpf: string;

    constructor(name: string, accountNumber: number, balance: number, cpf: string) {
        super(name, accountNumber, balance);
        this.cpf = cpf;
    }

    showDocument(): void {
        console.log(`CPF: ${this.cpf}`);
    }
}

