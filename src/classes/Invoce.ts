export class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        private amount: number
    ) {}

    public format(): string {
        return `${this.client} doit ${this.amount}$ pour ${this.details}`
    }
}